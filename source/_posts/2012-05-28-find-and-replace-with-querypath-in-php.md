---
title: Find and Replace with QueryPath in PHP
slug: find-and-replace-with-querypath-in-php
tags:
---
To find and replace using querypath without destroying existing context you can use the following:

<code>$temp = qp($output, 'table')->addclass('table');
$output = $temp->top('body')->innerHTML();</code>
