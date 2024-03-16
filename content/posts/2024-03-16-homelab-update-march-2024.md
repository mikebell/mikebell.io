---
title: Homelab Update March 2024
description: ""
date: 2024-03-16T10:27:54.924Z
draft: false
tags: []
categories: []
cover:
  image: ""
  alt: ""
type: default
slug: homelab-update-march-2024
---

This is a replacement for my [Kubernetes Homelab Pt0](posts/kubernetes-homelab-journey-pt0/). I figured that it was best to write about my homelab in general since I'm not running k8s at the moment.

# Temporary 2nd homelab

I temporarily have 2 servers, ones provisioned and ready for installation at my parents place to replace their aging Raspberry Pi Home Assistant setup. Here are the specs:

* FIREBAT T8 Pro Plus Mini PC
* Intel N100
* 16GB ram
* 512gb hd

It came to around £123 after shipping from AliExpress. After confirming everything was working I formatted it and installed Proxmox. It now mirrors pretty much how I have my main server setup so it should be easy remote manage in case there are any problems.

I did spend a while looking at SBCs but there's just no point in using them any more, there too expensive for the performance. It's a real shame as I used to really like playing around with Raspberry Pis.

# New router

I've replace my Banana Pi BPIR3 with a Ubiquiti UniFi UCG-Ultra. I never quite managed to figure out how to get OpenWRT installed on the main EMMC board, the dip switch switching didn't seem to work for me. The UCG-Ultra fits in nicely with the rest of my UB hardware and is ticking along nicely after setting it up and moving all my devices from my selfhosted controller to the UCG.

If your interested in buying the Banana Pi then get in touch, I'd prefer to sell to someone I know than put it on ebay.

# Faster broadband

I'll be getting faster broadband this Monday, going from 220/30 to 550/75 with Cloudscape Connect. After shopping around for a while I decided to stick with them as their support is really good and it's nice not to be with a huge corp. I still want to look into Zen when this 12 month contract runs out, hopefully gig fttp will be a bit more affordable, although I'll have to look at rebuilding my networking stack as it's not built for that speed ([the UCG Ultra can't support 1 gig with IDS](https://community.ui.com/questions/UCG-Ultra-upstream-capped-PPPoE-issue/1eaa6553-33b2-450d-8edf-846e20377a55)).

# Changelog

* I've removed my unifi controller in favour of the built in updated Network Controller in the UCG-Ultra, migrating devices was a bit fiddly with the factory reset but it took about 15 minutes in total.
* Wireguard Easy is also gone in favour of the built in wireguard.
* My [Mealie](https://github.com/mealie-recipes/mealie) setup got deleted and rebuilt to move to their latest version. All recipes are back in and I need to look into the meal planning side of things.

# Kubernetes

As the opening paragraph states I'm not running k8s at the moment, I don't need it right now. Any learning I need to do happens at $work where we run enough clusters to keep me happy! I left off with an issue in fluent-bit causing 100% CPU usage across all nodes and gigs of error messages in Opensearch. I'll come back to it eventually, I think the second iteration of it will be a single node instead of the 4 I had. I can re-provision it easily with ArgoCD as well.

# NAS Upgrade

I'm in the process of upgrading drives in my 4 bay Synology NAS, I currently have 2 x 8tb and 2 x 16tb giving me a usable space of 20.9tb. It's turning out to be very expensive and it's a hell of a lot louder now. There isn't any ethernet routing in the house so I run everything in my lounge, it's about time I got that sorted.


That's about it for now. Lot's done and even more still to do.