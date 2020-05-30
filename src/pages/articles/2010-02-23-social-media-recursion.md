---
title: Social Media Recursion
path: "social-media-recursion"
date: "2010-02-23"
layout: post
description: "With what seems to be a new social network being released every week, I'm looking at you Buzz, people have more than their fair share of choices to make. This got me thinking, why not have an account on everyone? Well for a start there's no point, but most crucial is why bother if none of your friends are on there."
---
With what seems to be a new social network being released every week, I'm looking at you Buzz, people have more than their fair share of choices to make. This got me thinking, why not have an account on everyone? Well for a start there's no point, but most crucial is why bother if none of your friends are on there.

Now this is the part where recursion comes in, the majority of social networks have some sort of api or some hook that developers can use to interact with the services. So why not hook them all together? For example:

Network 1 posts Message 1 to Network 2, Network 2 posts Message 1 to Network3, Network 3 then adds one character to Message and posts back to Network 1.

The rules are:

1. Communication between Networks must be done using a provided api.
1a However if network is big enough and has no api then other methods can be used in conjunction with .

2. Message must start with one character, this will grow by one with each recursion.

3. Experiment ends when Message equal 140 characters (twitter must be used).

4. Your allowed one 'bridge' script, this script can either be used to bridge a network that doesn't provide a suitable api or as part of 4a.
4a. Your 'bridge' script must pause the recursion for 5-10 minutes, this is to stop any potential problems with api limits or potential classifications as spam.

That's about it really, I'd love to see what people come up with. When I get chance I'll give it a try.
