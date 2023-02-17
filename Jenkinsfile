pipeline {
    //   agent {
    //     node {
    //         label 'my-node-label'
    //         // customWorkspace '/var/lib/jenkins/workspacecd '
    //         customWorkspace '/var/lib/jenkins/workspacecd/test-production '
    //         // customWorkspace '/var/lib/jenkins/workspacecd/test-develop '
    //         // customWorkspace "${env.BRANCH_NAME == 'main' ? '/var/lib/jenkins/workspace/test-production' : '/var/lib/jenkins/workspace/test-devell'}"
            
    //     }
    // }
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