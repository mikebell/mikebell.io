---
title: Using Jenkins CI and Drupal

path: ""
date: ""
layout: post
description: ""
tags:
  - "Drupal"
  - "Drupal Planet"
---
While building my Drupal 7 profile I started playing around with Jenkins CI. My reasons for doing so were two fold:

1. Code Quality
I believe in code quality, there are multiple tools out there that will analyse code and report back using various different metrics. CI allows me to run these metrics on a repeatable basis, if my code changes then the quality changes. This makes me a better developer overall.
1. Repeatable Tasks
Jenkins can do anything you throw at it, why not throw at it all your boring repeatable tasks?
#Installation
<code>sudo apt-get install jenkins</code>

Simple!
#Configuration
After installing Jenkins read [this](https://wiki.jenkins-ci.org/display/JENKINS/Securing+Jenkins). Out the box Jenkins is open to the world so now might be a good idea to lock it down a bit.

It's also worth clicking around the admin screens and getting to grips with it, there are a lot of options when setting things up. Checkout the available module list, chances are your going to want to use a few. Installing these are as simple and point and click.
#Useful plugins
- Git - of course this will come in really really handy
- Copy Artifact Plugin - Jenkins allows you to create artifacts (a zipped up copy of all files built) this comes in really handy when using multiple build steps, no more cloning repos a couple of times.
- Jenkins Doxygen Plug-in - does what is says on the tin, executes doxygen to create documentation.
#Example Jobs
1. Testing drush make files
2. Testing profile install using drush si
3. Running cron, mostly used for getting notifications of failures and audit trail
4. Building doxygen documentation
# Testing drush make files
Sometimes drush make files take a while to run, I have a project that contains a lot of modules, it's average build time is around 5 minutes. The project roughly needs rebuilding at least once or twice a week. So that's 10 minutes time spent waiting, now imaging if the build fails, this could be due to a couple of reasons (mostly bad release numbers) but if it fails that 5 minutes wasted. Testing this make allows me to make changes to the make file without worrying about it, I usually just <code>drush dl module</code> and update the make file manually for other developers to use. Overall this saves time and frustration over broken builds.

This is also a great time to use the copy artifact plugin, this will save you having to redownload drupal core and contrib multiple times throughout your tests. Be sure to exclude any .git repos otherwise copying the artifact will fail due to permission errors. Artifacts are only saved when a successful build.
#Testing profile install
You can use drush to install profiles, this comes in really handy when your testing profiles in development. In my setup I have it chained so that every time a successful make file is built it then copies the files to a new workspace and runs <code>drush si</code> this then captures all the output and exits if there are any errors in the install.
#Running cron
This is as simple as it sounds, you can setup a job to run cron on all your sites. This is a great tool as it provides an audit trail and notifications on any errors.
#Building doxygen documentation
Assuming you have a doxygen setup file configured for you project you can get Jenkins to build the documentation for you. If you add this into your build chain it'll run whenever all the test you run are successful, this will save building docs for broken functionality.
#Summary
Repeating time consuming jobs over and over again is boring and distracts away from the focus of a project, by using Jenkins in my development setup it's allowed me to focus on what's important and monitor my errors (we all make them) without having to worry about them. There is a lot more you can do with Jenkins this is only a taster. I'm hoping to present next Wednesday at NWDUG in Manchester. Over the next few weeks I'll expand on the example jobs above and post my setup and code used to achieve them.

Thanks to [Stewart Robinson](https://twitter.com/#!/stewsnooze) for giving me a really good code sample and point in the right direction
