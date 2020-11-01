---
draft: false
title: Windows 10 isn't that bad to develop with
date: "2019-02-13"
template: post
slug: "developing-in-windows-10"
tags:
  - "Windows 10"
  - "Development"
category: "Development"
description: "After upgrading to Windows 10 finally I figured I'd check out what it's like developing on Windows 10 and to be honest it isn't that bad."
---
After upgrading to Windows 10 finally I figured I'd check out what it's like developing on Windows 10 and to be honest it isn't that bad.

## Windows Subsystem Linux

I installed the Ubuntu image and switch shell to ZSH. After importing all my dotfiles and setup from my Linux machine this works really well. A quick symlink form `~/Projects` to `/mnt/c/Users/digital/Projects` makes it really easy to open it up and then start working on a project. Even though I have git installed I still use it in the Ubuntu image, oh-my-zsh autocompletions are hard wired in my brain now and very hard to give up.

## Docker CE for Windows

This installed and worked fine straight off the bat. I run Powershell to interact with `docker` and `docker compose`. I've seen a few StackOverflow posts about running this directly inside Ubuntu WSL but haven't gotten around to setting that up. Will be interesting to see how things work as I start introducing more complex network structures.

## Visual Studio Code

I really like this editor, it seems quite light and has a load of really good plugins that support my ever shifting development needs.

So there it is developing in Windows 10 isn't actually so bad after all.

(You'll still have to prise my KDE Plasma out of my cold dead hands though.)