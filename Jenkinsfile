#!/usr/bin/env groovy

pipeline {
    agent any

    environment {
        JEKYLL_VERSION = '3.5'
    }

    stages {
        stage('Build') {
            steps {
                sh 'docker run --rm --volume="$PWD:/srv/jekyll" jekyll/builder:$JEKYLL_VERSION jekyll build'
            }
        }
        stage('Deploy') {
            steps {
                sh 'rsync -avh --exclude=\".git/\" --exclude=\"output_prod\" \"/var/lib/jenkins/jobs/mikebell.io-v2/workspace/_site/\" \"/var/www/mikebell.io/\"'
                sh 'Test'
            }
        }
    }
}
