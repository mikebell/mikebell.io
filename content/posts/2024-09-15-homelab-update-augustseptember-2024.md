---
title: Homelab Update August/September 2024
description: ""
date: 2024-09-15T10:05:11.277Z
draft: false
tags: []
categories: [homelab]
cover:
  image: ""
  alt: ""
---

August/JulySeptember update on my Homelab

<!--more-->

## Kubernetes

Finally fixed an annoying config issue on my local machine, `10.0.4.1` != `10.0.40.1`, that's a few months of on an off debugging wasted! Not had chance to get things up and running yet, I'm a bit unsure of whether to use ArgoCD or Flux, I have used ArgoCD in my previous iteration.

## Parents Homelab

I finally handed off the server to my dad an he installed it. After some remote setup from me it was ready to go. My dad managed to restore his old Home Assistant setup with only one issue (HA OS out of date) which was great. There's an issue with letsencrypt and AWS Route 53 which I haven't figured out yet, it's a mirrored setup from my local so not sure why it doesn't work, it did work when I first set it up but after letting the certs expire it's erroring.

## Commafeed is gone

I've removed commafeed now in favour of FreshRSS, I prefer the desktop and mobile interface. This reminds me the container is a few versions old now so need to update at some point.

## Paperless NGX

I've installed Paperless NGX now in order to get on top of masses of paper documents around the house. I'm super impressed with it and need to start using it a bit more.

## Immich

I've moved all my photos from Google Photos to Immich now as a backup but I'm unable to move 100% over because of the mobile app duplicating deleted photos. Currently I have about 6000 duplicate photos that I did dedupe only for them to be re-added! Frustrating but I'm waiting to see what happens with the github issue.

---

That's about it for both homelabs. Will hopefully get to spend a bit more time doing stuff.
