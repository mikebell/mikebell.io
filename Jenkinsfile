#!/usr/bin/env groovy

pipeline {
    agent any

    stages {
        stage('Build and generate') {
            steps {
                sh 'source /var/lib/jenkins/.rvm/scripts/rvm'
                sh 'rvm use ruby-2.2.1'
                sh 'jekyll build'
                archiveArtifacts artifacts: '**', fingerprint: true
            }
        }
        stage('Deploy') {
            steps {
                sh 'rsync -avh --exclude='.git/' --exclude='output_prod' '/var/lib/jenkins/jobs/mikebell.io-v2/workspace/_site/' '/var/www/mikebell.io/''
            }
        }
    }
}
