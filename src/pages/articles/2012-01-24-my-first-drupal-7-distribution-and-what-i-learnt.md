---
title: My first Drupal 7 Distribution and what I learnt

tags:
  - "Drupal Planet"
---
I've been using Tumblr for a few months now as a simple way of sharing the images I find interesting and beautiful (can be found at [ayil.co.uk](http://ayil.co.uk)). I found it was lacking in a few features that would be nice, being a Drupal developer I thought hell why not try and recreate it in Drupal 7.
## I've been here before.
I'm not new to profiles, I started playing around with them at the start of 2010 in Drupal 6 for a clients site. It seemed like a great way to get a site up and running quickly and cut out all the faffing about with installing modules and content types. It went pretty well but then I discovered Features and decided to move everything to them and haven't looked back (regardless of how many times I've wanted to stab my own eyes out with dependency hell).
## The start of something.
So why not recreate Tumblr in Drupal 7? It would have all the best bits of Tumblr and all the best bits of Drupal. Half the stuff I wanted to do comes straight out of the box, especially now that cck is in core.
## Queue the montage sequence.
For those not familiar with Tumblr you get 7 "content types", each of these have specific functionality such as posting a photo or standard text blog post. Creating the 7 content types was easy, a lot of point and clicking but achievable without any coding. Within a few hours I had all 7 content types mapped out and created within Drupal, it was very rough around the edges but it was there and most of all working (well almost).
## Shiny new toys.
Features allowed me to export all the configuration into separate modules which were controlled by a central controller module (a concept I've used a few times and should probably write more about). Adding a dependency to this controller module in my distribution info file meant that on install it would cascade down and install all the content types and associated settings. My distribution info file also contained the bare minimum to set-up various menus and blocks.

Since this was a personal project I decided to throw in some responsive theming for good measures, I used the Omega theme to give me a starting point but since my skills lie in code the theme never really went far, I just have no passion for web design. I highly suggest you checkout [omega tools](http://drupal.org/project/omega_tools) as it's a great way of configuring the theme in the shortest amount of time and it even comes with some handy drush extensions.
## Lights... Camera... ... is this thing on?
Since my use case was mostly media based I figured I'd check out the [media module](http://drupal.org/project/media). This was where it all went wrong, it's a usability nightmare, I went round in circles trying to figure out how to configure it properly to do what I wanted. In the end another colleague ended up ripping out what I'd done and replace it with something that nearly worked. I found the modal window approach to be horrible (this coming from a guy who's spent the last year living in a modal hell), here are a few of the issues I found:
1. Upload size = 0, documented bug.
2. Remote embed for image shows video options.
3. Ignore above it doesn't work for video or image using the third party modules.
4. Edge case conflict with omega theme.

So now I'm left with a distribution that installs and works for the most part. If I was a good Samaritan I'd jump into the issue queue and help where I can but I don't have the time or the patience. I'm not familiar enough with the changes in Drupal 7 as all my work time is spent in Drupal 6 and I haven't had the opportunity to delve behind the scenes of 7 yet.
## Making my life easier
I use drush a lot, it's probably one of the most used command-line tools in my arsenal at the moment. For those not familiar with drush make it's command that downloads modules and 3rd party libraries so you don't have to, it's a great time saver and well worth looking into. Drupal.org allows you to package a special version of a make file so that it will grab all the modules and 3rd party libraries (only white listed ones, a relatively new feature) and build it for you. Great idea in principle but the thing that annoyed me was the structure of the make file is fundamentally different between the normal type and drupal.org standard. This was a bit of pain for two reasons, the first is it broke my CI setup as a valid d.o make file can't contain "core" whereas normal drush make requires it. Secondly as I found out after converting my file is that sandbox distributions don't have this packaging setup available. Thankfully everything was tracked in git and 2 reverts later I was back to a normal make file.
### Why even bother with a make file testing?
I've been burnt too many times before by developers not testing their make files, it's annoying to have to sit through a whole build process for 4-5 minutes only to have it failed because someone has either spelt the module name wrong or used an invalid release. Automating this test is a great way to save myself and others hassle down the line.
## Dead and buried?
Far from it, every week I check the Media issue queue and various twitter postings to see the improvements being made on the module. It'll get there and when it does I'll continue to build my distribution towards some kind of stable release as I still believe that this is a great project.
## Where is it?
It can be found [here](http://drupal.org/sandbox/digital/1353814). Feel free to contribute suggestions/ideas/code. Out of the box you get a responsive site which emulates around 60% of the functionality of Tumblr, it's not pretty but it's functional.
## What did I learn?
Bucket loads, I'm now familiar with the new Drupal admin interface, I have a deeper understanding of install profiles. I also built a Jenkins setup to test various different aspects of building and creation of the profile which I'll write another blog post about. Taking on a distribution is a large task but ultimately worth it.
