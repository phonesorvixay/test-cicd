pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                dir('/home/jenkins/develop') {
                    sh 'npm install'
                    sh 'npm build'
                }
            }
        }
    }
}