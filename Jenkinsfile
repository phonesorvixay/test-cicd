pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                // dir('develop') {
                    sh 'npm install'
                    sh 'pm2 start server.js --name jenkins'
                    sh 'pm2 save'
                //     // sh 'npm build'
                // }
                //asdfasdfasdf
            }
        }
    }
}