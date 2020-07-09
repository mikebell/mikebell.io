---
title: Retiring the drupal.org forum.
slug: "retiring-the-drupal-org-forum"
date: "2011-02-06"
template: post
description: "Please retire the drupal.org forums"
---
**Note**: Due to popular demand I'm publishing this early, there will be future revisions.

There's a post on the drupal.org mailing list which caught my attention - [http://bit.ly/g56sOj](http://bit.ly/g56sOj)

> There has been some chatter on Twitter concerning the future of the
> forums on drupal.org.
>
> I don't want to relight any code wars on keeping it in house or using
> external solutions but......
>
> Here is a well supported stackexchange proposal to provide Drupal
> answers. I think this would be an ideal replacement for the Drupal.org
> forums.
>
> [http://area51.stackexchange.com/proposals/2978/drupal-answers](http://area51.stackexchange.com/proposals/2978/drupal-answers)
>
> Please offer your support and commitment to the stackexchange site so
> we can help new users more efficiently.
>
> Any opinions?
>
> Stewart Robinson
> @stewsnooze

The problem.
------------

Things get lost in the mad rush of Post Intsallation, get lost to the depths of emptiness in Module Development and spammed in Services. Retiring the drupal.org forums isn't as bad as it actually sounds. From my personal experience the quality just isn't there. It's very easy for your problem to get brushed under the rug, which isn't ideal when often enough you require answers quick. Now that's not a dig at people providing support on the forums or me demanding for support but it's just the way things are, sometime you are just desperate.

Quick test.
-----------

So to make sure this blog post isn't a wild stab in the dark I decided to run a quick test. Disclaimer time, this is one test! And by no means is it perfect. I tried my best to find a question that wasn't too noobish or too difficult, something that the average developer will come up against at some point in their career. It's also a question that can be answered by both developers and themers, think of it as a kind of shotgun question. So here it is:

> I'm trying to add css and js to a view via a preprocess in my template.php.
>
> I've created themename\_preprocess\_views\_view\_my\_view\_name($vars) and added in my drupal\_add\_js/css but its not working. The view loads fine but the added css and js are not outputted. My drupal\_add\_js syntax is correct because I've tested it in a hook\_nodeapi in a custom module. The documentation is really unclear as to how to use the function with views.
>
> Any help would be greatly appreciated.

It's not pretty or well written but it gets the point accross.  I posted this to both d.o post installation forums ([http://bit.ly/h9beIw](http://bit.ly/h9beIw)) and stackoverflow ([http://bit.ly/g61Lzv](http://bit.ly/g61Lzv)). I set myself the following rules:

1\. No replys - This is to ensure I don't bias either question by giving too much information away.
2\. The test will run for 24 hours (due to tardiness this is way over now).
3\. No bumps - Only really applys to d.o as SE has strict policies against this.

The results.
------------

It came as no surprise to me that some 6 days later there are still no replies to my d.o post however within 34 minutes I had one reply on SE and within another 10 hours a second. Without jumping the gun this is only one test but I feel that if I repeated it 5/10/15 times I'd get the same results (maybe someone else wants to have a go?).

A solution.
-----------

I'm a huge believer in the work that Stack Exchange/Overflow (SE) team do. It's a great collection of sites that can be used to ask questions and get accurate answers from. As a drupal developer and user the drupal.org (d.o) forums are a fustrating place. This is why I agree with Stewart Robinson (a great bloke by the way). A drupal dedicated SE site would benefit the community in a huge way. Not only does it contain so many great tools (too many to list here) but it has the added benefit of the potential to bring in people from other areas such as (shock horror) Wordpress/Joomla to give an outsiders view on Drupal (something which even Rasmus Lerdorf said in Copenhagen).

Google did it.
--------------

It's true! They really did ([http://developer.android.com/resources/community-groups.html](http://developer.android.com/resources/community-groups.html)). Android developers are encouraged to use the Android tag on SO to ask questions about the platform and developement. If my quick sql query is correct (yes SE allows you to query their databases directly! [http://data.stackexchange.com/stackoverflow/query/new](http://data.stackexchange.com/stackoverflow/query/new)) then there are currently ~34000 questions, which is a huge amount.

Conclusion.
-----------

So why not give it a go? Even if the d.o forums aren't retired at least the Drupal Answer SE site would provide an alternative. I see no reason not go ahead with it. To help move this along commit at: [http://area51.stackexchange.com/proposals/2978/drupal-answers](http://area51.stackexchange.com/proposals/2978/drupal-answers)
