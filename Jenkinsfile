node ('node') {
    try {
        stage('Checkout'){
            checkout scm
        }

        stage('Build') {
                sh 'source /var/lib/jenkins/.rvm/scripts/rvm && rvm use ruby-2.2.1 && jekyll build'
        }

        stage('Deploy') {
                sh 'cp -Rv _site/* /var/www/mikebell.io'
        }
    }
    catch (err) {
        currentBuild.result = "FAILURE"

        throw err
    }
}
