pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                dir('/root/jenkins/develop') {
                    sh 'npm install'
                    sh 'npm build'
                }
            }
        }
    }
}