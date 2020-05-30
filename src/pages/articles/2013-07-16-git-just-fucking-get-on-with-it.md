---
title: Git just fucking get on with it.

path: ""
date: ""
layout: post
description: ""
tags:
  - "Deployment"
  - "git"
---
Here is an unedited version of the post. Raw and uncensored:

After many a fruitless and frustrating discussions around git best practices here's my bulletproof method:

   * Tag it - if you want to release code you have to tag it. By tagging you also own that release if it doesn't fucking work I'll hunt you down. You did test it, right?
   * What branch should I use? I don't give a shit. I really don't, you're a big boy now we've let you use big boy tools like the command line take some initiative.
   * It's 5pm on a Friday before a bank holiday can we release? Wait there's a gif for this...


OK so it's extreme so here's the rational slightly less angry and more rational version:

   * Tagging  - By tagging you recognise that the build is ready for production, it's a releasable point in the code. You're also taking responsibility for that release (you may not be release manager), you've deemed it good enough to release to production.
   * Branching - Seriously here I don't care, ideally you'll be using your own fork of the repo so you can do whatever you want (if not create a new branch don't touch dev/prod). That's the great thing about git if you want n branches you can have n branches. Just make sure when you're ready to merge back into the production repo you submit a pull request against my dev branch.
   * No brainer here, unless it's an emergency your code release really isn't as important as you think it is. There is also a flip side to this, if your test coverage is pretty damned good then fine release, the release has to be pretty tight though.

My ideal repository would be two branches, dev and prod. People submit pull requests to dev and I then merge code ready for release to prod and tag it ready for it to be released. It's simple, here's an interesting use case:

> Company A readies a release tagged 1.0

> Company B has an emergency release that has to be deployed

> Company A doesn't want to mess around with their branch

> Company B branch from 0.9 applies any emergency fixes and create 1.0.1

> Company A merges in 1.0.1 changes from B and creates new release 1.0.2

There are no reverts here, no backwards and forwards between companies asking wtf is going on. Just a simple logical solution.

I hope this helps people refine their git practices.
