pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
        stage('Deploy') {
                steps {
                    echo 'i am going to deploy it  '
                    sh 'pm2 start server.js --name jenkins'
                    sh 'pm2 save'
                    sh 'export BUILD_ID=dontKillMePlease && pm2 restart server.js'
                }
        }
    }
}
