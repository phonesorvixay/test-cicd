pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                dir('/home/phones') {
                    sh 'npm install'
                    sh 'npm build'
                }
            }
        }
    }
}