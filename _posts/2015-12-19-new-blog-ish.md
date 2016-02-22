---
title: New Blog-ish

tags:
    - sculpin
---
I've finally moved my blog from Ghost to Sculpin as you can probably see.

It's all flat file html now which is generated via jenkins. I'm glad to be working with Jenkins again since I never really got on with Bamboo. I have quite a nice setup now. When I push a markdown post to the main repo it then triggers a build in jenkins which generates the css and html before copying it all to the webroot.

The theme is a modified version of Uno which I used on my Ghost blog. I've stripped out a load of stuff to make it simpler and styled it a bit, it's not perfect but it'll do. As part of porting the theme I've started using twig which has it's pros and cons. Currently the html is a bit borked if it displays certain posts, luckily most browsers handle it ok. I've posted [this](http://stackoverflow.com/questions/34364111/split-twig-content-after-html-tag) question to see if anyone can help. I've also started to use Gulp to manage building the theme. I still have a long way to go with it since I need to minify the css and fix the image compression since it doesn't appear to be working.

The migration was done by [ghosttosculpin](https://packagist.org/packages/mikebell/ghosttosculpin) which I wrote using Symfony Console. I had a lot of fun writing it and it's my first composer package.

Huge thanks to [Oliver Davies](https://twitter.com/opdavies) for helping me get started and providing a good base to work off.
