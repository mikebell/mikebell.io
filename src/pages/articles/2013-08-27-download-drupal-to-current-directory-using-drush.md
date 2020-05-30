---
title: Download Drupal to Current Directory using Drush

path: "download-drupal-to-current-directory-using-drush"
date: "2013-08-27"
layout: post
description: ""
tags:
  - "Drupal"
  - "drush"
---
This has always bugged me, you can't easily download Drupal to your current directory using drush. After a quick search I found this issue - https://drupal.org/node/495438

The following command works well - 

    drush dl -d --destination=".." --drupal-project-rename="$(basename `pwd`)"

So what's it doing?

* --destination - specifies where to download Drupal to
* --drupal-project-rename - renames the downloaded directory to your current directory

