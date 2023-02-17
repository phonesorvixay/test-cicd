pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                dir('/home/phone') {
                    sh 'npm install'
                    sh 'npm build'
                }
            }
        }
    }
}