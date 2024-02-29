---
title: VS Code Frontmatter FTW!
description: ""
date: 2024-02-29T13:18:02.389Z
draft: true
tags: []
categories: []
cover:
    image: ""
    alt: ""
type: default
---

While reading Kev Quirks latest post on [#100DaysToOffload](https://kevquirk.com/i-ve-finally-completed-100-days-to-offload) (RSS ftw as well) he hits upon the exact problem I've been having with creating more content for the blog:

> At the back-end I effectively have a custom-built CMS that has been designed, from the ground-up, to work exactly how I want it to.

Emphasis on the "to work exactly how I want". This blog is built using Hugo, posts are committed to git and then a github action pushes the compiled html to an S3 bucket. On the face of it that's pretty simple but the workflow has been slowing me down a lot. There are too many steps to getting content live:

1. Create markdown file using either `hugo` cli or copy and pasting existing post
2. Updating all the frontmatter manually
3. Writing the post
4. Working out what frontmatter I want to add, tags/cover, I can never remember how to do that. If I want an image I have to manually add it to `static` and link it.

Sure it's not the end of the world but it takes time and I've usually lost the will to post by then.

Enter [Frontmatter](https://frontmatter.codes/) extension for VS Code!

This provides a really nice interface on top of VS Code to create and manage existing posts within Hugo. I get a nice sidebar that allows me to add things such as cover images, tags, set publishing date and much more. Having this all in one place is great, I don't have to faff around with remember what frontmatter I need or copying around images I can just drag and drop them to the media editor and then reference them from the sidebar.

It gets better as well, cover images aren't supported by default in Frontmatter but are in my theme Papermod. I found that once I manually added the frontmatter to a post Frontmatter then asked me if I wanted to create a new page type or update my existing one. So now I have a new field in my sidebar for cover images. It seems like there's a lot more flexibility as well to be uncovered.

Overall I'm super happy with this extension and I hope it enables me to blog even more now. I'm going to untick "Is in draft" and update publishing date then I'll commit the post to git and push.
