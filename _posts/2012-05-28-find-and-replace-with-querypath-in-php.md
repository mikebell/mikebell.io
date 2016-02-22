---
title: Find and Replace with QueryPath in PHP

tags:
---
To find and replace using querypath without destroying existing context you can use the following:

<code>$temp = qp($output, 'table')->addclass('table');
$output = $temp->top('body')->innerHTML();</code>
