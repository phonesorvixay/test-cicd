pipeline {
      agent {
        node {
            label 'my-node-label'
            customWorkspace "${env.BRANCH_NAME == 'main' ? '/var/lib/jenkins/workspace/test-production' : '/var/lib/jenkins/workspace/test-develop'}"
        }
    }
    stages {
        stage('Build') {
            steps {
                // dir('develop') {
                    sh 'npm install'
                //     // sh 'npm build'
                // }
            }
        }
    }
}