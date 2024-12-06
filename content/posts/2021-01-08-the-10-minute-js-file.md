---
title: "The 10 Minute JS File Part 1"
date: 2021-01-08T11:49:21Z
draft: false
---

This problem has been plaguing me for months now so I thought I'd write down everything I've done to try and solve the issue of the 10 minute js file.

For some background I run a proxmox server in the garage with multiple VMs for k8s, home assistant, Unifi controller and piHole DNS. Home Assistant is pretty integral to our house now, most lights are run through it and there are multiple automations setup. It also provides my VPN connection. One of the things I'd love to be able to have is HA externally accessible that way I can leverage the presence detection. In theory it's super easy I just need to proxy the connection and setup SSL. If only!

### The Hardware

Here's a quick overview of my setup to provide some background:

`Asus DSL-AC56U > Unifi Poe Switch > TP Link Powerline adapter > TP Link Powerline adapter > Server`


### 1st Problem

My k8s is setup to be the load balancer with ports `80` and `443` forwarding from the router to the internal IP. Home Assistant runs on it's own VM. It is totally possible to use k8s to load balance an application not within k8s but it's a bit hacky. I'll probably end up writing another post on how I managed it.

Once I got the magic out of the way with I now had it proxied through Traefik on `http://ha.example.com` no SSL yet but that will come later. This is when I first noticed that I wasn't able to log in. Accessing it through it's internal IP address worked perfectly fine but on inspection of the web address assets were stalling on the way down. A simple `curl` from dev machine shows that it downloads a chunk then pauses for ages before continuing, in my tests it took 10 minutes to fully download the file.

### Is it the hacky k8s load balancer thingy?

This was easy to test just deploy another application using Helm, in this case Grocy and point a domain to it. No such luck, assets are still stalling and taking forever to download rendering a modern web application useless.

### Is it Traefik?

I wondered if I'd not configured Traefik correctly. Microk8s comes with it's own bundled Traefik which I removed and re-installed using Helm in order to access the dashboard. Thankfully it's an easy thing to test, I replaced it with Nginx Ingress, while I was at it I installed and configured cert-bot to provide SSL certs for any future applications. So now HA is proxied to `https://ha.example.com` through Nginx Ingress. No luck here still takes forever to download the JS file.

### Is it PiHole?

There's a popular saying on /r/sysadmin that "it's always DNS" it should be the first thing you check.

I run two PiHole instances on this machine, one in k8s and one in a dedicated VM. I set my dev machines DNS to `1.1.1.1` to see if that was the issue and nope. At some point I should change the DNS on the router and make sure k8s is using a public DNS just to fully cross this off my list.

### Is it k8s?

Maybe it's some problem in the bowels of my k8s setup. Another easy test here. I span up a new VM installed nginx and Ghost blog through docker, changed the router forwarding IP to the VM and checked the domain. Nope still a problem, it doesn't rule out ProxMox or the machine being an issue.

### Is it proxmox/the machine?

I'm sort of getting desperate now, I'd like things to be working properly so that I can carry on learning without having to worry about these issues but I'm not going to let this go. To test if it's ProxMox or the machine I provisioned a spare Raspberry Pi, installed nginx and Ghost blog (in docker again) and re-routed the router connection to the Pi. Guess what it's still an issue. That's quite a relief since I don't fancy having to buy a new server. Testing this also ruled out it being an issue with the powerline adapters since the Pi was plugged directly into the POE switch.

### Where next?

It's on to the networking gear now. This is honestly where my knowledge gets sketchy, dealing with hardware and network hardware is out of my wheelhouse so it's going to take a bit of time to figure out *how* to test this stuff.