---
title: Building docker image with Forgejo Actions
description: ""
date: 2025-02-14T20:29:52.009Z
draft: false
tags: []
categories: []
cover:
  image: ""
  alt: ""
template: ""
showTableOfContents: false
showDate: false
showReadingTime: false
showWordCount: false
slug: building-docker-image-forgejo-actions
---
aka how I nearly went crazy trying to figure out how to build docker images in Forgejo Actions.

With the default setup from [here](https://forgejo.org/docs/latest/admin/runner-installation/#oci-image-installation) you can get up and running with foregjo actions *but* it won't allow you to build docker images inside your workflows.

When I tried to build a docker image in a workflow I kept getting the following:

```
ERROR: Cannot connect to the Docker daemon at unix:///var/run/docker.sock. Is the docker daemon running?
::error::buildx failed with: ERROR: Cannot connect to the Docker daemon at unix:///var/run/docker.sock. Is the docker daemon running?
```

It's quite a common error and something that should be easy to fix but when you throw docker-in-docker in to the mix it becomes way more complex.

To cut a long story short I found a [comment](https://code.forgejo.org/forgejo/runner/issues/153#issuecomment-5824) with a link to [this](https://code.forgejo.org/forgejo/runner/src/branch/main/examples/docker-compose/compose-forgejo-and-runner.yml) example which was confirmed to be working, after a few tweaks I came up with the docker compose below. I've removed the need to be running forgejo already (I have set in a separate compose) and updated the base image.

```
# Copyright 2024 The Forgejo Authors.
# SPDX-License-Identifier: MIT

#
# Create a secret with:
#
#   openssl rand -hex 20
#
# Replace all occurences of {SHARED_SECRET} below with the output.
#
# NOTE: a token obtained from the Forgejo web interface cannot be used
#       as a shared secret.
#
# Replace {ROOT_PASSWORD} with a secure password
#

volumes:
  docker_certs:

services:

  docker-in-docker:
    image: code.forgejo.org/oci/docker:dind
    hostname: docker  # Must set hostname as TLS certificates are only valid for docker or localhost
    privileged: true
    environment:
      DOCKER_TLS_CERTDIR: /certs
      DOCKER_HOST: docker-in-docker
    volumes:
      - docker_certs:/certs

  runner-register:
    image: code.forgejo.org/forgejo/runner:6.2.2
    links:
      - docker-in-docker
    environment:
      DOCKER_HOST: tcp://docker-in-docker:2376
    volumes:
	  - ./data:/data
    user: 0:0
    command: >-
      bash -ec '
      while : ; do
        forgejo-runner create-runner-file --connect --instance https://code.remotelab.uk --name runner --secret {SHARED_SECRET} && break ;
        sleep 1 ;
      done ;
      sed -i -e "s|\"labels\": null|\"labels\": [\"docker-cli:docker://code.forgejo.org/oci/docker:cli\",\"node-bookworm:docker://code.forgejo.org/oci/node:20-bookworm\"]|" .runner ;
      forgejo-runner generate-config > config.yml ;
      sed -i -e "s|  level: info|  level: debug|" config.yml ;
      sed -i -e "s|network: .*|network: host|" config.yml ;
      sed -i -e "s|^  envs:$$|  envs:\n    DOCKER_HOST: tcp://docker:2376\n    DOCKER_TLS_VERIFY: 1\n    DOCKER_CERT_PATH: /certs/client|" config.yml ;
      sed -i -e "s|^  options:|  options: -v /certs/client:/certs/client|" config.yml ;
      sed -i -e "s|  valid_volumes: \[\]$$|  valid_volumes:\n    - /certs/client|" config.yml ;
      chown -R 1000:1000 /data
      '

  runner-daemon:
    image: code.forgejo.org/forgejo/runner:6.2.2
    links:
      - docker-in-docker
    environment:
      DOCKER_HOST: tcp://docker:2376
      DOCKER_CERT_PATH: /certs/client
      DOCKER_TLS_VERIFY: "1"
    volumes:
      - ./data:/data
      - docker_certs:/certs
    command: >-
      bash -c '
      while : ; do test -w .runner && forgejo-runner --config config.yml daemon ; sleep 1 ; done
      '
```

Hopefully this helps anyone else who comes across this issue.