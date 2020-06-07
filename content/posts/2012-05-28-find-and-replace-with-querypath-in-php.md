---
title: Find and Replace with QueryPath in PHP
slug: "find-and-replace-with-querypath"
date: "2012-05-28"
template: post
description: "To find and replace using querypath without destroying existing context."
---
To find and replace using querypath without destroying existing context you can use the following:

```
$temp = qp($output, 'table')->addclass('table');
$output = $temp->top('body')->innerHTML();
```
