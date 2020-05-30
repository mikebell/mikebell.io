---
title: PSR-4 for dummies with practical example

path: ""
date: ""
layout: post
description: ""
tags:
  - "php"
  - "PSR-4"
---
Every time I come to write a new application I always forget how to use PSR-4 so here’s my practical example

Directories:

    - src
    - - Digital
    - - - Epok
    - - - - Controller
    - - - - - HomePageController.php

composer.json

    {
        "require": {
            "silex/silex": "~1.1"
    },
        "autoload": {
            "psr-4": {
                 "Digital\\Epok\\Controller\\": "src/Digital/Epok/Controller"
            }
        }
    }


HomePageController.php

    <?php
      namespace Digital\Epok\Controller;

      use Silex\Application;
      use Symfony\Component\HttpFoundation\Request;

      class HomePageController {
        public function homePage(Request $request, Application $application) {
          return 'Hi';
        }
      }


Hopefully this will help me remember how I should setup PSR-4 with a new project.
