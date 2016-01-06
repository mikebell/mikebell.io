---
title: Release and Rollback with Robo
slug: release-rollback-with-robo
tags:
  - Robo
---
I've been looking for a release management tool for a while now. There are quite a lot of tools to do this but I just couldn't get my head into writing XML for most of them.

I decided to take a look at [Robo](http://robo.li/) and see what I could do. Since it's all written in php and can be included in any project with composer it's dead easy to get to grips with.

My [RoboFile.php](https://gist.github.com/mikebell/de71ea97bee4332797e9) consists of the following commands:

* ```setup``` - Creates basic directories for use. Use $site to setup path variable.
* ```composer:build``` - Run composer install in your project
* ```release``` - Release a new version of your entire codebase to $site/releases. This also calls ```composer:build```
* ```rollback ($version)``` - Rollback to the last release or if you pass the unix timestamp of the last release it'll revert to that.

This leaves you with the following:

    $site
      /releases
          /123456789
          /123456790
          /current -> 123456789

So you can easily point your web server config to ```$site/releases/current```

I'm not quite happy with using a unixtime stamp so will probably replace that with a variable you can pass in as part of the ```release``` task.

I think this is a fairly nice way of handling release management, it's nice to have something that is easy to jump into.
