---
title: Homelab update October/November/December
description: ""
date: 2024-12-06T13:25:24.781Z
draft: false
tags: []
categories: []
cover:
  image: ""
  alt: ""
---
Potentially a long one this time round. Lot's of changes/updates/additions to my homelab. I'm also still managing a second homelab for my parents which brings it's own set of challenges but is a lot of fun.

## New Jellyfin Server

The Jellyfin android tv app is going through some awesome updates at the moment (just landed in v18!) namely trickplay images and support for skipping intros/outros. These are both features I've wanted for a while. The only issue is they're quite computationally expensive. With my old VM based setup I didn't have access to a GPU to offload these tasks to, generating trickplay images for 3% of my library took 5 days! Not really acceptable even after tweaking to use 100% cpu. My solution was to buy a second mini pc a GMTek G3, it came with an Alder Lake (checkout Quicksync capability, future proof for a long while!) N100 with 16GB of ram. It runs debian with with Jellyfin running in docker with GPU passthrough. Generating trickplay images took around 3-4 days for my entire library using the GPU which is much better. I also have transcoding support if I ever need it.

## Migration to Debian

I'm in the process of moving all my VMs to Debian, it's a slow process but all new applications will be spun up on a second vm instead of my old Ubuntu vm. I'm finding Debian to be much much faster than Ubuntu which is great. This one is going to take quite a while so at the moment I only have OpenSearch running on it.

## Opensearch

Finally I have OpenSearch sort of working, it's currently aggregating Jellyfin logs for the time being. I've yet to properly play around with it but it seems to be working a lot better than my first attempt! Only major issue so far is that my saved indexes patterns aren't persisting. I'm sure I'm doing something wrong so will figure it out at some point. I'm using fluent-bit to pass Jellyfin logs to OS, I'll be using fb for all my VMs eventually as it's really simple to setup and use.

## Rebuilt ADSB Setup

I came across [SDR Enthusiasts docker](https://sdr-enthusiasts.gitbook.io/ads-b) setup and absolutely loved it. For a long time I've only been feeding FR24 but this makes it so much easier to add more feeders to the setup. I've created a new vm for this, no real reason to do this but it meant I could play around with it without effecting my other applications. Now I'm feeding FR24 and ADSB Exchange, if your wanting to play around with this sort of stuff I highly recommend checking out the link above. I'll be duplicating this setup for my parents sometime in the future.

## Even smarter smart home

I've replaced a few of the lights in the lounge with RGB ones, all the RGB bulbs and light strips are linked together as a group in Home Assistant so we can easily set the mood of the lounge, with all the extra work we've done in the lounge it's really made it a nice place to chill out in again.

We've also had smart meters fitted, information should be coming into Home Assistant now. It'll be interesting to see how much my homelab costs (sample 1 hour over night) although I'm slightly worried I'll become obsessed with every penny we spend on electricity and gas.

## Orange Pi and SBCs

At the same time I bought the GMTek mini pc I also got an Orange Pi, I'm not really sure why I bothered, it was more expensive and not as powerful. Overall I'm really disappointed with SBCs now, there's no point in getting them when you can buy an x64 arch mini pc cheaper. I'll be using it for my parents ADSB setup at some point just so it doesn't go to waste.
