---
title: Drupal Deployment using deb packages and Jenkins
slug: "drupal-deployment-using-deb-packages-and-jenkins"
date: "2013-02-17"
template: post
description: "I couldn't sleep last night due to a stupid amount of coffee while my brother came round so I go to thinking how I could sort out the mess that is currently my production server."
---
I couldn't sleep last night due to a stupid amount of coffee while my brother came round so I go to thinking how I could sort out the mess that is currently my production server.

I first thought about using codebasehq/deployhq but decided I don't need any more money going out of my account when I have the skills and knowledge (also hardware) to do this myself. After seeing how we deploy stuff at work I figured I'd try and port it across to Debian based servers and make quite a few changes based on my requirements.

Here is an overview of what I want to put in place:

1. Jenkins server for all the hardwork (already setup from the mumblr days)
2. Package script to create debs of sites
3. Deployment script to push and install debs on remote servers (probably just handled within Jenkins).

You'll need the following Jenkins plugins:

1. Git
2. Debian Package Builder - https://wiki.jenkins-ci.org/display/JENKINS/Debian+Package+Builder+Plugin

You'll also need to setup a pgp key so that you can sign your package, read more here - https://help.ubuntu.com/community/GnuPrivacyGuardHowto. Once you've configured that you'll then need to export it and save it in jenkins:

>  gpg --export -a "jenkins" > public.key

>  gpg --export-secret-key -a "jenkins" > secret.key

**Note this has to be done with the name "jenkins"**

Within your workspace you'll need a folder called debian, within that you'll need the following files:

1. control
2. copyright
3. rules





