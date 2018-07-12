#!/usr/bin/env groovy

pipeline {
    agent docker {
        image 'jekyll:builder'
    }

    environment {
        JEKYLL_VERSION = '3.5'
    }

    stages {
        stage('Build') {
            steps {
                sh 'jekyll --version'
                archiveArtifacts artifacts: '**', fingerprint: true
            }
        }
        stage('Deploy') {
            steps {
                //sh 'rm -rf /var/www/mikebell.io/*'
                //sh 'rsync -avh --exclude=\".git/\" --exclude=\"output_prod\" \"/var/lib/jenkins/jobs/mikebell.io-v2/workspace/_site/\" \"/var/www/mikebell.io/\"'
                sh 'Test'
            }
        }
    }
}
