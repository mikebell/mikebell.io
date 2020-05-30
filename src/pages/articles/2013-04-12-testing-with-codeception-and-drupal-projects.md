---
title: Testing with Codeception and Drupal Projects

path: "testing-with-codeception"
date: "2013-04-12"
layout: post
description: ""
tags:
  - "Drupal"
  - "Drupal Planet"
---
As part of my increased like of agile development and the control it gives you over your estimates and deliverables I've become increasingly aware of the horrible fact our code coverage sucks. There's no real way to sugar coat it we don't do proper testing, it's bugged me for years.

## Technical Debt

I first read of technical debt over 5 years at my previous job, the basics of technical debt are that every hack/bodge job will bite you in the ass and you will spend more time fixing things in the long run that implementing it correctly. Now this is where agile comes in, with better estimations it allows you to factor in more unknowns, break down user stories into smaller more achievable tasks and ultimately give you a higher level of what is to be achieved.

## With smaller tasks comes great responsibility

When you break down each user story into a task it gives you a clear set of deliverables, now both the user and developer are clear on what needs to be achieved. Now with this method there's no more "that was way too ambiguous", you should now exactly what has to be delivered. So on completion of that test how do you confidently say it's complete? There are two ways:

1. Suck it and see, mark task as complete and let client figure it out
2. Test the thing and test it hard and repeatedly.

## Over and over and over and over again

So now you know what you have to deliver, you should test it. Here's where codeception comes in, it's a framework that allows you to quickly (and I mean quickly!) write acceptance testing for you application. It also integrates with other types of testing (e.g. unit tests) but lets start small.

With each task you should always create a test, each test should actually test functionality, remember don't test for the sake of it!

## Getting down to it

1. Install it - http://codeception.com/install
2. Create your fist acceptance test:
     <code>php codecept.phar generate:cept acceptance DrupalUserLogin</code>
3. Write your first test:
<code>
$I = new WebGuy($scenario);
$I->wantTo('Ensure Drupal Login Works');
$I->amOnPage('/user');
$I->fillField('edit-name', 'digital');
$I->fillField('edit-pass', 'THIS IS MY REAL PASS');
$I->click('edit-submit');
$I->see('digital');</code>
 
4. Define your site (tests/acceptance.suite.yml):

<code>
class_name: WebGuy
modules:
    enabled: [PhpBrowser, WebHelper]
    config:
        PhpBrowser:
            url: 'drupal.org'</code>

5. Run the badger! - <code>php codecept.phar run</code>
6. Bask in the glory of your first test.


There it is, dead easy to do! There's no reason you shouldn't implement this for every task in your sprint backlog.


## Where to go from here?


After playing around with this for a few hours I seem to be doing the same thing. Each test requires me to login as I don't think each test environment shares session/cookies. I need to figure out a way of creating a codeception module which allows you to plug in a drupal testing user (ideally multiple so you can test each role) and then all the you have to do is call a function which executes the above steps to confirm your logged in before testing authenticated behaviour.


Something along the lines of:


<code>$I->drupalLogin('editor');</code>


## Why will this work?


When you initially set out estimation of each story you should add an extra 5-10% for testing. This way you can cover the additional time taken to write these tests. Trust me it's worth it in the long run!

## Update 20/05/13

My colleague Paul Byrne has posted a second part to this article with more information - http://paul.leafish.co.uk/articles/code/more_testing_with_codeception_and_drupal_projects - Check it out.
