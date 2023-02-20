pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                // dir('develop') {
                    sh 'npm install'
                    sh 'pm2 start server.js --name jenkins'
                //     // sh 'npm build'
                // }
                //asdfasdfasdf
            }
        }
    }
}