---
title: Download Drupal to Current Directory using Drush

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

