---
draft: false
title: Smart home
date: "2022-07-18"
template: post
slug: "smart-home"
tags:
  - "Home Assistant"
  - "Phillips Hue"
  - "ESPHome"
  - "Zigbee"
  - "Proxmox"
category: "Smart home"
description: ""
---
For the last few years I've been trying to "smarten" our home up with technology in a security conscious way. There are a lot of IOT technologies out there that rely on third party servers often in undesired locations.

When I first started down the smart home route I went with Philips Hue. It's a great starter in terms of both hardware and software. The Android app is nice but quite slow at times. The hardware at the time was also quite expensive but prices are being driven down by third party alternatives. I currently have 8 lights all connected via the Hue bridge.

## Third party lighting

The first thing I noticed with Hue was just how expensive the lights were. This was a huge pain considering my original intention was to replace all the lights in the house! Over the past few years companies like Ikea and Innr have brought out compatible (zigbee) lights at a fraction of the cost of Hue. I currently run mostly Innr lights through the Hue hub.

Downsides to third party lights is that you lose the ability to do firmware updates without their own hub. I've not really had a problem so far but I do wonder what the difference would be like if I could update the firmware.

## Home Assistant

![Home assistant full][smarthome-full]

I've been running Home assistant for about 2 years now and find it quite good at integrating various different aspects of my smart home. It's very powerful, above is the dashboard I run in a browser tab on my computers and tablet, this gives me a really nice overview of what's going on in the house. Below is a mobile dashboard for when I'm on phone and just want to turn the lights on and off.

![Home assistant integrations][smarthome-mobile]

### Hue

My Hue hub is now connected to HA so I can control all the lights in the house. Below is an image of the mobile ui I set up to quickly change the lights around the house. Missing is my office light because I don't really use it much over Summer. Setup of the Hue bridge was automatic and seamless. I was really impressed by just how quick I could get setup with it.

![Home assistant mobile homepage][smarthome-integrations]

### ESPHome and cheap smart plugs

After reading the HA forums I found some cheap smart plugs from 2Nice which are compatible with ESPHome. ESP provides firmware that you can flash to your ESP compatible hardware to enable it's use within HA. I currently only have one plug integrated at the moment to switch on a cat calming diffuser, it doesn't work, the plug works fine but the cats aren't calm! I have it automated to come on at 4:50am and off at 9am.

![Home assistant cat calmer][smarthome-plug]

HA automations are hugely powerful when it comes to controlling everything in HA. At first they're quite difficult to get your head around but once you learn them they can be very cool.

Overall the smart plugs came out about £8 each which is really good. They also work via wifi and have no reliance on servers outside my network making them more secure.

### Deconz, Conbee 2 and smart buttons

Since starting out on this project I've become more and more interested in zigbee compatible products. There's a huge range of Chinese sensors and buttons that can be picked up super cheap off AliExpress if your willing to wait for the shipping.

I currently have a few Xiaomi Button switches which connect to Deconz through the Conbee 2 usb stick. Using HA automations I can have them do whatever I want to anything connected to my smart home. My current implementation is a button that turns of "Lounge Light Right" because my wife insists on having it on while watching TV which causes glare. It's a super niche usage but it's nice to be able to do stuff like that.

![Home assistant switch][smarthome-switch]

Over the next few weeks I'm hoping to get some zigbee compatible temperature sensors so I can hook them up around the house.

## HACS

HA comes with it's own add on store but HACS provides another add on store with even more options. It's ideal for installing themes and more niche components. I've got the Nord theme installed through it and will be looking at bluetooth integration for Xiaomi temperature and humidity sensors when my dongle arrives.

## Future work

I've been really happy with all the integrations and I'm always on the look out for more things I can do around the house. My next big thing will be smart heating. I'm not sure what I'm going to go with just yet, there are some good options out there but each one seems to have a few issues:

* Nest - no smart TRVs
* Hive - ugly!
* Tado - subscription based features

Once I've settled on a brand then I'll work on getting it integrated into HA.

[smarthome-mobile]: ../images/smarthome-mobile.png "Home assistant mobile"
[smarthome-integrations]: ../images/smarthome-integrations.png "Home assistant integrations"
[smarthome-plug]: ../images/smarthome-plug.png "Home assistant cat calmer"
[smarthome-switch]: ../images/smarthome-switch.png "Home assistant switch"
[smarthome-full]: ../images/smarthome-full.png "Home assistant full"