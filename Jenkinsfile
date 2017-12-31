#!/usr/bin/env groovy

pipeline {
    agent none

    environment {
        JEKYLL_VERSION = '3.5'
    }

    stages {
        stage('Build') {
            agent {
                docker {
                    image 'jekyll:jekyll'
                    args '--rm --volume=\"$PWD:/srv/jekyll\" -it jekyll/builder:$JEKYLL_VERSION jekyll build'
                }
            }
            steps {
                archiveArtifacts artifacts: '**', fingerprint: true
            }
        }
        stage('Deploy') {
            steps {
                //sh 'rm -rf /var/www/mikebell.io/*'
                sh 'rsync -avh --exclude=\".git/\" --exclude=\"output_prod\" \"/var/lib/jenkins/jobs/mikebell.io-v2/workspace/_site/\" \"/var/www/mikebell.io/\"'
            }
        }
    }
}
