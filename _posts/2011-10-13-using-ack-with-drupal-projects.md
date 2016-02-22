---
title: Using ack with Drupal projects

tags:
  - Drupal Planet
---
I decided to move to Ack for searching as it has nice switches like --php and --nosql.

By default ack doesn't recognise .module, .install or .inc files so you have to add them. Create a .ackrc file in your home directory and add the following:

<code>
--type-set=drupal=.module,.install,.inc</code>
