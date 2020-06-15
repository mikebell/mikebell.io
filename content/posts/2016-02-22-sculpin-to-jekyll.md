---
title: Sculpin to Jekyll
tags:
  - "Sculpin"
  - "Jekyll"
slug: "sculpin-to-jekyll"
description: ""
date: "2016-02-22"
template: post
---
A while ago I found Sculpin through [@opdavies](https://twitter.com/opdavies) it looked really great, a PHP based blogging engine. It's pretty decent but there are a few issues with it. Namely [this](https://github.com/sculpin/sculpin/issues/295), there's already a PR for it but it's not been merged in and doesn't look like it will any time soon. The bug renders it all pretty useless when trying to modify things.

I was initially learning sculpin so that I could move Mental Health Awareness week over to it, but after trying to implement the existing theme in sculpin I found it nearly impossible to get anywhere fast. Theme support in Sculpin is a bit weird.

This is where Jekyll comes in, at Wunder our on-boarding and generally awesome [docs](http://way.wunder.io/) are built using gh-pages which is a wrapper for Jekyll. It makes perfect sense to move to Jekyll and get to grips with it.

Migrating was relatively easy just nuking the slug part from each post was enough to get it parsing my old content. A quick `sed` did the trick. The theme went across relatively easily I just had to tweak a few values here and there. You can see the entire process in the git history on github.

I've had to rebuild my build job but that's pretty easy using rvm on the build server.

Pretty pleased with the results so far. Next job is to clean the sass up and then completely rewrite the html and remove any cruft that's come over in the 2 older migrations.
