---
title: "Home Assistant Backup to S3"
date: 2021-04-08T10:10:35+01:00
draft: false
tags:
  - Home Assistant
---

How to easily backup your Home Assistant configuration to an S3 bucket.

## Steps

1. Go to Supervisor
2. Add-on Store
3. 3 dot menu - Repositories
4. Add `https://github.com/mikebell/hassio-backup-s3`
5. Close

Once the addon is installed you can click on it and follow the up to date [readme](https://github.com/mikebell/hassio-backup-s3/blob/master/backup-s3/README.md) file to configure your IAM user and policy.

I then use [hass-auto-backup](https://github.com/jcwillox/hass-auto-backup) with Node-RED to automate the process and send a message to my Discord server when complete.