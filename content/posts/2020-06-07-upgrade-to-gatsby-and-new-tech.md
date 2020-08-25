---
draft: false
title: Upgrade to Gatsby and AWS
date: "2020-06-07"
template: post
slug: "upgrade-to-gatsby-and-aws"
tags:
  - "Gatsby"
  - "Development"
  - "AWS"
category: "Development"
description: "A few weeks ago I started to the move to GatsbyJS after a few false starts I finally got there. Once I had everything migrated including updating all the frontmatter (this took ages), I was ready to deploy it. I have multiple server on DigitalOcean all capable of hosting a static blog but decided that I wanted to offload everything to AWS to learn more about the tools available."
---
It's been over a year since I last blogged, there are a number of reasons:

* Broken realease pipeline (well not quite but it was messy)
* I wanted to move everything to docker
* I hated the way the blog looked

A few weeks ago I started to the move to GatsbyJS after a few false starts I finally got there. Once I had everything migrated including updating all the frontmatter (this took ages), I was ready to deploy it. I have multiple server on DigitalOcean all capable of hosting a static blog but decided that I wanted to offload everything to AWS to learn more about the tools available.

## The CD pipeline

Since mine was in a bit a state (Vault doesn't auto unseal), I wanted to play around with other tools outside of Concourse.

Firstly I started with AWS Codebuild, it's a bit odd when you're used to Concourse but there's enough documentation out there to figure it all out. One of the blockers I found was that when running `npm build` it wouldn't pick up some of the folders. I never did get round to figuring out what the issue was with it so decided to abandon that and try Github Actions.

With Github Actions it was dead easy to setup and the integrated secrets management was very nice, I really like what they've done with it and I'll be interested in exploring more of what's on offer there.

So at the moment the blog automatically builds on every push to the repository. This is the flow:

**Push** > **Github Actions Build** > **Publish to S3** > **Invalidate Cloudfront**

I really like this workflow as it's about as hands off as possible, this means I can just blog!

If your interested in the build file it can be found [here](https://github.com/mikebell/mikebell.io/blob/master/.github/workflows/main.yml).

