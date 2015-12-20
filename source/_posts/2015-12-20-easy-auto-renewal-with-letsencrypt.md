---
title: Easy Auto Renewal with Letsencrypt
slug: easy-auto-renewal-with-letsencrypt
tags:
    - letsencrypt
---
After reading a lot of different docs for letsencrypt I couldn't find an easy way of auto renewing my domains simply. So after I've compiled what I've found so far.

Add the following to your nginx conf block block:

    location  /.well-known/acme-challenge/ {
      alias /var/www/mikebell.io/.well-known/acme-challenge;
      try_files $uri =404;
    }

Then add the following to crontab as root:

    0 0 1 * * letsencrypt certonly --webroot -w /var/www/mikebell.io/ -d mikebell.io --renew-by-default

The ```--renew-by-default``` is key here since it means that it runs without being interactive.
