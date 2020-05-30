---
title: Find and Replace with QueryPath in PHP
path: "find-and-replace-with-querypath"
date: "2012-05-28"
layout: post
description: ""
---
To find and replace using querypath without destroying existing context you can use the following:

```
$temp = qp($output, 'table')->addclass('table');
$output = $temp->top('body')->innerHTML();
```
