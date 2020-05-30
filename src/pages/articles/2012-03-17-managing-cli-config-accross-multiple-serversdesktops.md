---
title: Managing CLI config accross multiple servers/desktops
path: "managing-cli-config"
date: "2012-03-17"
layout: post
description: ""
---
After using CLI for more than three years I've amassed multiple .*rc files for configuration.

When I bring a new server/desktop online I needed a way to quickly import all my settings and get up and running.

My standard configuration always consists of ZSH with the great oh-my-zsh scripts. Additional to this I have my own .zshrc/.vimrc/.ackrc configs.

I created the following script to automatically install my config files on any new server:

	#!/bin/bash
	rm ~/.ackrc
	rm ~/.vimrc
	rm ~/.zshrc
	echo "Removed old config files"
	ln -s ~/homeconfig/.zshrc ~/.zshrc
	ln -s ~/homeconfig/.ackrc ~/.ackrc
	ln -s ~/homeconfig/.vimrc ~/.vimrc
	echo "Installed new config files"

So now whenever I bring up a new server/desktop I simply run the following:

	git clone blah@blah.com:blah.git
	cd blah
	./install.sh
	
The install script is very destructive and doesn't takeinto account any of your previous setups so it's always good to make sure you know what's in your install.sh before running it.

Enjoy!
