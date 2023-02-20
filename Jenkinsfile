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
                    sh 'cd /var/lib/jenkins/workspace/Test3_main && pm2 start server.js --name jenkins'
                    sh 'pm2 save'
                }
        }
    }
}
