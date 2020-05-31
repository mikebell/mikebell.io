---
draft: false
title: Tmux for fun and Profit
date: "2017-06-15"
template: post
slug: "tmux-for-fun-and-profit"
tags:
  - "Ubuntu"
  - "Tmux"
category: "Linux"
description: "I've known about TMUX for a few years now but never got around to checking it out. It's not until the past few weeks where I've spent most of my time in the terminal for various projects that I've really felt the need to dig in and learn the basics."
---
I've known about TMUX for a few years now but never got around to checking it out. It's not until the past few weeks where I've spent most of my time in the terminal for various projects that I've really felt the need to dig in and learn the basics.

### Installation - TMUX

    sudo apt upgrade
    sudo apt install tmux

Done

### Installation - Tmuxinator

	gem install tmuxinator

The reason I use Tmuxinator is it's a great way to set environment setups that persist through reboot. The config uses YAML which is nice and human readable and you can add your config files to a gist or dotfile repo if you want.

I'm not really going to go into the depths of using of using TMUX - this [post](http://www.hamvocke.com/blog/a-quick-and-easy-guide-to-tmux) by Hermann Vocke does a much better job than I can explaining the cool things you can do.

### Configuration

Here are some of my specific configuration in ```~/.tmux.conf```


	# Use mouse like a peasant
	set-option -g mouse on

	# STFU
	set-option -g visual-activity off
	set-option -g visual-bell off
	set-option -g visual-silence off
	set-window-option -g monitor-activity off
	set-option -g bell-action none

	# switch panes using Alt-arrow without prefix
	bind -n M-Left select-pane -L
	bind -n M-Right select-pane -R
	bind -n M-Up select-pane -U
	bind -n M-Down select-pane -D

	# remap prefix from 'C-b' to 'C-a'
	unbind C-b
	set-option -g prefix C-a
	bind-key C-a send-prefix

	# reload config file (change file location to your the tmux.conf you want to use)
	bind r source-file ~/.tmux.conf

Hopefully the comments should be self explanatory, there are a lot more things I could do here but starting off simple is the way to go for me. In the future I'd like to look at styling TMUX, there are some awesome examples on [/r/unixporn](https://reddit.com/r/unixporn).

Here is a working example of my dev tmuxinator config:

	name: dev
	root: ~/

	windows:
  	- editor:
  		template: main-horizontal
  		panes:
  		  - cd ~/Sites/projects/
  	    - cd ~/Vagrant/Convivio-VM && vagrant up
        - cd ~/Vagrant/Convivio-VM

What this does is create me a horizontal terminal and then two columns below it. The main terminal opens my project directory, the first column opens my VM directory and then brings it up, the third column moves me into the VM directory so I can run ```vagrant ssh``` when it's up.

There's a lot more things to do to automate my dev setup but for the time being it's pretty handy.
