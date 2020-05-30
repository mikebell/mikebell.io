---
title: Theorycrafting Drupal Deployment Via Bittorrent

path: "theorycraftin-drupal-deployment-via-bittorrent"
date: "2013-06-09"
layout: post
description: ""
tags:
  - "Drupal"
---
There was an article floating around a few weeks ago about deploying large scale applications to multiple servers through bittorrent. I remember being at a talk by a Facebook developer who mentioned they did the same. I figured I'd put some thought into how it could be done at a practical level for Drupal sites.

Tools Needed:

1. Jenkins - http://jenkins-ci.org/
2. mktorrent - http://mktorrent.sourceforge.net/
3. rtorrent/libtorrent - http://libtorrent.rakshasa.no/
4. ocelot/gazelle - https://what.cd/gazelle/

## Jenkins
Jenkins can be used to tie all the separate tools together.

## mktorrent
A cli tool to build .torrent files which can be pushed off to remote servers. This can integrate with Jenkins to build the torrent based of Jenkins variables. 

## rtorrent/libtorrent
This is a command line torrent client, it can be setup to watch from a directory on the remote server. It then starts downloading files once a new torrent is places into the watch directory.

## Ocelot/Gazelle
High performance bittorrent tracker and web front end. This can be used to manage connections between all your web front ends.

## Sample Workflow
1. Developer pushes code to specific git branch
2. Jenkins fires a build to pull down the latest code (Build 1)
3. After Build 1 finishes mktorrent runs to package a .torrent file (Build 2)
4. Torrent file is published to Gazelle (Build 2)
5. After Build 2 finishes torrent file is pushed to all remote servers
6. Each rtorrent instances starts download of files

## Issues
Things become a bit complex once the files have been distributed via torrents, my main concern would be how to reliably switch over to the new files once the download has completed. rtorrent does have the ability to issue commands once a download has finished but I'm unsure whether it could potentially run an external script.

Drupal is small (averaging 16-30mb for a normal site Drupal 7) so bittorrent isn't the most effective method of distributing a codebase.

## Benefits
Error Detections - Ability to reliably say you have exactly what's expected
Speed - All web server will be providing upstream so in theory the only slow part will be disk IO and downstream connection.

Overall this is an interesting thought experiment would quite like to try it out one day.

