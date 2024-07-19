---
title: Homelab Update July 2024
description: ""
date: 2024-07-19T06:40:50.137Z
draft: false
tags: []
categories: [homelab]
cover:
  image: ""
  alt: ""
type: posts
slug: homelab-update-july-2024
---

June/July update on my Homelab

<!--more-->

## June

Not much happened in june, I spent most of it on holiday and I "cleaned" up my ssh keys so locked myself out from my phone and tablet. I really need to figure out a better solution for managing ssh keys. I've been talking about doing it for years but haven't gotten around to putting a solution in place.

## Changelog

* New k3s server running on Debian 12
* New VM running on Debian 12

## Migration to Debian 12

All new VMs are now running on Debian 12 as a replacement of whatever stupidly named Ubuntu Server is the latest LTS. I really like Debian, it just works without any bloat, I've finally got out of the habit of `apt update && apt upgrade` every 5 seconds like I used to do on Ubuntu Server. It has it's quirks and I'm still getting my head around some of it's nuances. I'll most likely create my own Debian 12 image with a few extra utils installed by default soon.

## K3S

Kubernetes is back in the homelab! It's not doing anything yet, there's an issue with accessing port 6443 outside of the VM so `kubectl` isn't working from my main dev machine. It's probably a firewall issue but not had time to look into it and sort it out.

## New D12 VM and Forgejo

I've spun up a fairly hefty VM to run Forgejo on just need to get around to installing it and the runners. The plan here is to move my Github organisation into my homelab instead of running it on Github. I rely quite heavily on Github Actions for running my none homelab infrastructure and don't want to have to worry about running out of free minutes for private repos.

One of the reasons I'm procrastinating on installing Forgejo on this server is that I *should* install it on the K3S server. I'm just not sure I can be bothered with the headache. My day job is k8s which is amazing but my homelab is all about making things as simple and easy as possible for me. That's not to say k8s isn't worthwhile I just want to spend my time wisely.

## Docker server HDD space increase

My main docker VM went from 100GB to 150GB this week in preparation for Trick Play on Jellyfin. Unfortunately I won't be able to use it until the Android TV client supports it but hopefully that will be soon.

---

That's it for the update this month, there's been the usual container updates but nothing of note.