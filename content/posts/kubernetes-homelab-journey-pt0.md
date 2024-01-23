---
title: "Kubernetes Homelab Journey Pt0"
date: 2024-01-23T17:10:06Z
draft: false
---
I'm going to attempt to document my journey migrating from my current homelab setup to kubernetes. I can't promise when these posts will come as I'm finding I have less time and energy outside of work to do these things but here goes!

## Where are we now?

Currently I have two main setups:

1. Ubuntu Server - this serves as my docker-compose vm
2. k8s server and 3 agents

The Ubuntu Server contains all my docker-compose files and mounts to my NAS. There is no CI/CD so updates are done manually and setting up a new application is a case of modifying files directly on the filesystem. This served me well for many years but it's starting to become tedious. I have around 30 applications deployed this way, some are live others are just test stacks.

## Current Kubernetes

As mentioned above I am using k8s already. I have 4 Ubuntu Server vms running k3s. It works which is nice but I'm just waiting for snap to go wrong and break something. I'm going to look into moving to something else over the next few weeks. I feel really comfortable doing this because once I have argocd installed I can just point it my existing configuration and have everything provision nicely.

## Next steps

* Moving away from k3s and snaps
* Moving away from Ubuntu Server (all my new VMs are debian 11/12 now)
* Start moving docker-compose apps to k8s via argocd (or flux2 hmmm)
