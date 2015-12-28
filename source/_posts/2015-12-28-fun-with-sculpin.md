---
title: Fun with Sculpin
slug: fun-with-sculpin
tags:
  - Sculpin
  - Gulp
---
After migrating my blog over to Sculpin I've slowly been tweaking things here and there. Over the past few days I've added the following:

* Static social media links to post titles
* Posted time ago on homepage
* Comment counts after read more link
* Gulp all the things

It's been quite a lot of fun adding all these features. They all touch a wide range of services and different parts of the site.

### Static social media links
These are built with free icons converted into a font and then displayed in a span tag wrapped in a link to the various different social media sites.

### Time ago
This uses a jquery plugin call [Timeago](http://timeago.yarp.com/) which tags onto html outputted by twig, I'm slowly getting to grips with twig through examples I find around the web. For some reason I just don't get along with Symfony documentation.

### Comment counts
This is just javascript taken from Disqus, pain in the ass the get it setup though. Disqus as a whole isn't great.

### Gulp
There is an [outstanding](https://github.com/sculpin/sculpin/pull/296) pull request with Sculpin which without it makes using ```sculpin generate --watch --server``` painful, serving a page takes over a minute. So I've basically recreated a lot of the toolchain with gulp. I've pushed all the code up to the main repo and my gulpfile.js can be found [here](https://github.com/mikebell/mikebell.io/blob/master/source/gulpfile.js). Running ```gulp build``` kicks off a series of watch tasks that check the file system for any changes and then reacts based on whats changed. I then serve all the html content through drupalVM which I have permanently running in the background. One of the things I'll love to see from ```sculpin generate``` is the ability to output the compiled site to a different directory outside of the main sculpin repo.

I've really enjoyed playing around with all this stuff and it feels good to be learning new things again and coding for pleasure.
