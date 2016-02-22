#!/bin/bash
source /var/lib/jenkins/.rvm/scripts/rvm
rvm use ruby-2.2.1
jekyll build
