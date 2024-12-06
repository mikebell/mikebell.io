---
title: "Moving From Gatsby to Hugo"
date: 2020-11-11T12:59:46Z
draft: false
tags:
  - Blog
  - Hugo
---

I've moved to Hugo after probably the shortest time with any site generator.

Firstly I love to change the theme of blog I get blog envy quite easily these days. But I'm not a themer so I don't attempt to create anything like what I see on other sites.

Admittedly when I moved to GatsbyJS is was because of this starter theme - [Gatsby Starter Lumen](https://github.com/alxshelepenok/gatsby-starter-lumen) - it looks really good and is quite a smart theme. More importantly it has pretty good accessibility according to Lighthouse something that is a huge priority for me these days.

The problem with the theme is it's an all or nothing approach, you clone the theme make your config changes and then add your content. Not so good, I now have a customised version of a theme that is being regularly updated (a good thing!) but no way of cleanly applying my customisations and content over. I raised this [issue](https://github.com/alxshelepenok/gatsby-starter-lumen/issues/788) but there's been no movement on it. I'm sure there is a smart way round this but I'm not familiar enough with NodeJS to wade too deep into it.

So this is where Hugo comes in - it's a Go binary that runs all most OSs and treats themes not as the end of the world but as a component of the overall site. My current theme is in fact a git submodule that I can update locally and then push the ref to to update it. Thankfully the frontmatter of most of the posts I've written was compatible so it was a drag and drop replacement.

The deployment pipeline for this is still relatively similar as you can see [here](https://github.com/mikebell/mikebell.io/blob/master/.github/workflows/main.yml). I've left in the old way of deploying as reference if anyone needs it for a Gatsby site.

I'm super happy with Hugo so far especially:

```
hugo new posts/this-is-a-blog.md
```