---
title: Quick and Easy Drush Debian Packaging

path: ""
date: ""
layout: post
description: ""
tags:
  - "Debian"
  - "drush"
---
I found a really nice way of packaging up drush as a debian package without having to go through all the hassle of creating all the files for a “true” debian package.

You’ll need the following:

* Git
* Composer
* FPM gem

You can then run the following commands to setup your base environment for packaging:

`git clone git@github.com:drush-ops/drush.git`

`cd drush`

`composer install`

`sudo gem install fpm`

To test to make sure your latest master copy of drush is working quickly run either `drush` or `drush —version`

Now you are ready to package the contents up:

`fpm -s dir -t deb -n drush -v master ./drush=/usr/bin`

What this does is tell fpm you want to create a deb file from a directory with a version name of master (corresponding to the branch we checked out in git), it also configures the output directory.

Once that’s run you should see the newly created package appear. To verify it’s contents run `dkpg -c drush_master_amd64.deb`


Throw in a parameterised job in jenkins and you have a nice way of creating version specific debian packages for deployment.
