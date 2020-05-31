---
draft: false
title: Deploying Jekyll with Concourse CI
date: "2019-01-11"
slug: "deploying-jekyll-with-concourse-ci"
tags:
  - "Jekyll"
  - "Concourse CI"
  - "CI/CD"
category: "CI/CD"
description: Practical example of how to build and deploy a Jenkins site using Concourse CI.
---

Sometimes the best way of learning something is to just dive in and start using it. I find it really useful to pick an existing working implementation of something and the build it using something else. In this case it's my blog build and deployment. This was working perfectly fine using docker and jenkins but I got tired of just how heavy Jenkins was.

If you just want to now what the pipeline file looks like then check [here](https://github.com/mikebell/mikebell.io/blob/master/concourse.yml).

**Note: All secrets are handled using Vault, I'll probably blog about that later.**

So let's break this down piece by piece:

Our first major part of the yaml file is the `resource_type`:

```
resource_types:
- name: rsync-resource
  type: docker-image
  source:
    repository: mrsixw/concourse-rsync-resource
    tag: latest
```

This defines a new resource type that uses a docker image that contains `rsync`. Since everything within Concourse is a container then running simple commands should be done this way as well.

Next up is our `resources` these are "things" we want the pipeline to use:

```
resources:
- name: mikebell-io
  type: git
  source:
    branch: master
    uri: https://github.com/mikebell/mikebell.io.git
- name: sync-resource
  type: rsync-resource
  source:
    server: mikebell.io
    base_dir: /var/www/mikebell.io
    user : digital
    private_key: ((concourse-priv))
    disable_version_slug: true
```

In this case I define two `resources` the git repo I want to pull from and the rysnc source and it's configuration details. The bit marked `((concourse-priv))` is a variable that's grabbed from Vault.

The next bit is the `jobs` these are what they say on the tin, jobs to be run. This should be mostly familiar to anyone who's worked with similar pipelines before like Drone or CircleCI.

```
jobs:
- name: Build
  public: true
  plan:
  - get: mikebell-io
    trigger: true
```

We have the name of the job, wether it's publicly visible in the Concourse web interface and the first part of our plan. The `get` specifies that I want Concourse to get the resource I've defined as `mikebell-io`in this case it's the git repo.

```
- task: Build site
    config:
      platform: linux
      inputs:
      - name: mikebell-io
      outputs:
      - name: site
      image_resource:
        type: docker-image
        source: {repository: jekyll/builder}
      run:
        slug: sh
        args:
        - -exc
        - |
          ls -lash
          chown jekyll:jekyll site
          jekyll build -s mikebell-io -d site
```

Here we have the meat of the pipeline the commands we want to run inside our docker container which in this case is the jekyll builder image. Rather than running the default entry point of the image I had to specify a few shell commands so that I could correctly get the site built and it's output in the correct place. In Concourse `inputs` and `outputs` can't share the same entry point so instead of the usual Jekyll building inside the main path I had to build outside.

```
- put: sync-resource
    params: {
      CONCOURSEPRIV: ((concourse-priv)),
      "sync_dir": "site",
      }
```

The last part of the file is the `put` this tells concourse to use the resource that I setup (the rsync image with it's base configuration) and then pass in some extra run time parameters.

All of this took some time to piece together from various sources around the internet so I hope it helps someone else in the future.

One thing I'm going to look at is making the deployment part a seperate task, it's probably bad form to include the deploy inside the build step.
