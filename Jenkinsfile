pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                // sh 'npm install'
                echo 'i am going to build it '
            }
        }
        stage('Deploy') {
                steps {
                    echo 'i am going to deploy it '
                    sh 'docker-compose up --build -d'
                }
        }
    }
}
