---
title: Blocking Twitter Trends and User Recommendations using Adblock Plus
path: "blocking-twitter-trends"
date: "2012-02-04"
layout: post
description: "To block twitters really annoying trends and user recommendations use the following custom filter"
---
To block twitters really annoying trends and user recommendations use the following custom filter:

Updated via @emaleroland

    twitter.com##div[class*="flex-module trends-container context-trends-container"]

Old:

    twitter.com##div[data-component-term="user_recommendations"]
    twitter.com##div[data-component-term="trends"]

I've created a filter list you can import into adblock plus. You can download it here - https://github.com/digital006/socialcrapremover

Feel free to fork and commit additional filters
