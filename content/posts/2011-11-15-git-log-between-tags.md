---
title: Git log between tags
slug: "git-log-between-tags"
date: "2011-11-15"
template: post
description: "How to git log between tags"
---
This has been bugging me for a while, the cheap and easy way to make changelogs:

<code>git log 6.x-1.0-beta8...6.x-1.0-beta9 --pretty=format:'%h was %an, message: %s' > ~/changelog.txt</code>
