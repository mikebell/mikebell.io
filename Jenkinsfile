#!/usr/bin/env groovy

pipeline {
    environment {
        JEKYLL_VERSION = '3.8'
    }

    agent {
        docker {
            image 'jekyll/builder'
        }
    }

    stages {
        stage('Build') {
            steps {
                docker.image('jekyll/builder').inside {
                    sh 'jekyll --version'
                }
            }
        }
        stage('Deploy') {
            steps {
                //sh 'rm -rf /var/www/mikebell.io/*'
                //sh 'rsync -avh --exclude=\".git/\" --exclude=\"output_prod\" \"/var/lib/jenkins/jobs/mikebell.io-v2/workspace/_site/\" \"/var/www/mikebell.io/\"'
                sh 'echo I work?'
            }
        }
    }
}
