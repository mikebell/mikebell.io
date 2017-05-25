pipeline {
    agent any

    stage('Build') {
        steps {
            sh 'source /var/lib/jenkins/.rvm/scripts/rvm && rvm use ruby-2.2.1 && jekyll build'
        }
    }

    stage('Deploy') {
        steps {
            sh 'cp -Rv _site/* /var/www/mikebell.io'
        }
    }
}
