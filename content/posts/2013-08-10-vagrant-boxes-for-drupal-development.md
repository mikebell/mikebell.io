---
title: Vagrant Boxes for Drupal Development

slug: "vagrant-boxes-for-drupal-development"
date: "2013-08-10"
template: post
description: ""
tags:
  - "Development"
  - "Drupal"
  - "Vagrant"
---
During my time off I figured I'd get my dev environment setup for when I start at CTI.

Using the really great [puphpet.com](https://puphpet.com/) I've created two new vagrant configs, the first is for Apache the second is for Nginx.

## The Changes
- Removed xhprof and dot file support
- Added an easier way to provision new vhosts and dbs.
- Added drush

## Internals
- Ubuntu 12.04
- PHP 5.3

## Usage
```shell
git clone git@github.com:digital006/drupaldev-nginx.git
mkdir sites
vagrant up
```

## Links
https://github.com/digital006/drupaldev-nginx

https://github.com/digital006/drupaldev

Hope these are useful to others.
