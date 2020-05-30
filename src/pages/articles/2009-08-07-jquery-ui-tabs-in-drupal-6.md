---
title: Jquery UI Tabs in Drupal 6
draft: false
date: "2009-08-07"
layout: post
path: "jquery-ui-tabs-in-drupal-6"
tags:
  - "Jquery"
  - "Drupal"
category: "Drupal"
description: "A few months ago I saw an ubercart shop that had tabbed content on the product pages. Genius idea!"
---
A few months ago I saw an ubercart shop that had tabbed content on the product pages. Genius idea!

As per rule 35 of drupal/the internet a module probably already exists but I decided to build this from scratch.

It's not a module so I won't be releasing it, it's more a proof of concept for me to learn some more drupal skills.

My first attempt failed miserably attempting to shoe horn it into the default node.tpl.php. So rather than doing it this way I created a view to display node content based on the content type and an argument (something I've never really been too keen on). The thing I love most about Views is how it gives you everything you need to theme it. Within 2 minutes I had the code needed to make any modification to the views display. I then modified the row print to wrap a div tag around the three fields I'd created using CCK, I also created the list needed to fire the tabs.

I'm new to the jQuery UI library so after reading up on tabs and looking at the source code I set about integrating everything I needed to get it to work, this included the div wrapping and list elements.

The first real problem I encountered was the version of jQuery UI, it was the latest version and didn't use the same version as Drupal does, after upgrading jQuery using the Update jQuery Module (#35 again!) and downloading the correct UI version I was set to go.

The second problem was a bit obscure but easy to fix, the fields outputted by views were referenced as classes rather than IDs, after checking that they were unique therefore not breaking validity I changed the tpl.php file to use IDs, simple!

Overall this was a neat little project something that I'll use in other project definitely (including this site no doubt).
