---
title: Moving Away from Spotify
description: ""
date: 2024-03-07T09:51:56.895Z
draft: false
tags:
  - Spotify
  - Music
categories: []
cover:
  image: ""
  alt: ""
slug: moving-away-from-spotify
---

Spotifys quality sucks, it's UX is horrible and it pays it's artists pretty much sod all so it's time to move away and build my own cloud music service. It's a lot easier than it sounds!

## How do I get my data?

Replacing each and every album I have saved on Spotify is no mean feat, I have hundreds saved on there. My first problem was getting all that data out of Spotify into something easy to understand, you can request *all* your data from Spotify [here](https://support.spotify.com/uk/article/data-rights-and-privacy-settings/). You request your data then wait a few days for it to show up, you get a boat load of badly organised JSON which isn't great.

Parsing all that data is the next job, I ended up using [Your Spotify](https://github.com/Yooooomi/your_spotify). It connects to your existing Spotify account and downloads the last 30 days (I think) of data. You can also import your existing data from the json files you got earlier. This then builds up an accurate picture of what you've been listening to over your entire Spotify existence, in my case around 10 years.

## Where does the music come from?

This is where Your Spotify comes in really handy I can search around my data and find albums that I want to buy first. Most of my music is purchased from [Bandcamp](https://bandcamp.com/), it turns out that supporting artists properly (ish) is quite a lot more than £17.99 a month. It's a slow process as I'm not quite ready to drop thousands on all the music from my Spotify account but I'm getting there. I reckon it'll probably take me around 5-10 years at the rate I'm going to fully rebuild my collection. I'm ok with this.

## Where do I store it?

I've lost my music collection once before many many years ago and it's heartbreaking so this time everything is a bit more secure. I have a 20tb NAS which has redundancies in case of failure, I'm also planning some form of cloud backup in the future.

## How do I sort it?

For this I'm using [Beets](https://beets.readthedocs.io/en/stable/index.html) a CLI tool has plugin support. When I grab an album I use `beet import` to import which renames the files and if possible downloads a `cover.jpg` file. [Navidrome](https://www.navidrome.org/) scans my music folder once an hour for new music, although I can do this manually.

## How do I listen to it all?

I have an NFS share from my NAS to my Proxmox server which then connects to a dockerised Navidrome setup. This acts as my music server. I can play music through Navidrome but prefer to have third party clients connect:

* Windows 11 and OSX - [Supersonic](https://github.com/dweymouth/supersonic)
* Android TV - [Jellyfin](https://jellyfin.org/)
* Android - [Symfonium](https://play.google.com/store/apps/details?id=app.symfonik.music.player&hl=en&gl=US)

All these apps (apart from Jellyfin) connect to Navidrome.

### Symfonium and transcoding

The neat thing about Synfonium and Navidrome is that it transcodes on the fly so when I'm out and about and I don't want to use gigs of mobile data it transcodes down to Opus Audio:

```
ffmpeg -i %s -map 0:0 -b:a %bk -v 0 -c:a libopus -f opus -
```

I need to play around with Opus Audio to get an idea of what it's capable but the file size vs quality is pretty damned good at the moment.

## Conclusion

I'm really happy with this setup, I'm not tied to any one application and any component can be swapped out at any time giving me the freedom to try different things.

---

## Discuss at

<iframe src="https://remotelab.uk/@mikebell/112087551082246586/embed" class="mastodon-embed" style="max-width: 100%; border: 0" width="400" allowfullscreen="allowfullscreen"></iframe><script src="https://remotelab.uk/embed.js" async="async"></script>