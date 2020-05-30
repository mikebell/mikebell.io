---
title: Rough and Ready phpcs in PHPStorm
path: "rough-and-ready-phpcs-in-phpstorm"
date: "2013-11-29"
layout: post
description: ""
---
Make sure you have pear installed:

`sudo pear upgrade-all` - If this fails then install pear, if it works then congrats on updating all your pear extensions

`sudo pear install PHP_CodeSniffer`

OSX Only - `sudo cp /private/etc/php.ini.default /private/etc/php.ini`

Add `include_path = ".:/php/includes:/usr/lib/php/pear/"` to php.ini, not to change your includes directory to where pear is installed!


Now for Drupals cs patterns:

Download Coder module - https://drupal.org/project/coder
Untar to a directory e.g. `~/Projects/coder`


PHPStorm Config:

PHPStorm > Settings > PHP > Code Sniffer

To find the phpcs path type `which phpcs`

Then use that path in PHPStorm

Click validate to test whether it works or not.

You should also increase the tool process timeout as it takes a while to test core files.


While still in settings select Inspections, drill down to phpcs in PHP and enable the point the coding standard to wherever you downloaded coder to.
