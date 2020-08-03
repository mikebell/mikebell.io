---
title: Override servers version of drush

slug: "override-servers-version-of-drush"
date: "2014-01-23"
template: post
description: "Recently I had to work on a server that was heavily restricted by a third party company. They were using an archaic version of drush so I decided to change it!"
tags:
  - "Drupal"
  - "drush"
---
Recently I had to work on a server that was heavily restricted by a third party company. They were using an archaic version of drush so I decided to change it!

I have no access to sudo or any form of root account, this made things even more interesting. No wget either.

* Download drush 6.2.0 to local machine
* Download console_table 1.1.3 (has to be this version)
* `scp` both drush and console_table to remote server
* `unzip` drush to ~/drush-6.2.0
* `tar -zxf` console_table to ~/drush-6.2.0/lib/
* modify .bashrc / .zshrc and add the following:
PATH="/home/badger/drush-6.2.0:$PATH”
export PATH
* `source ~/.bashrc` or `source ~/.zshrc`

There you go the latest version of drush on a locked down system.

