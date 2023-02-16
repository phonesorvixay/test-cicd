pipeline {
    agent any 
    stages {
        stage('Build') { 
            steps {
                echo "Hey I am going to build now"
                sh "npm install"
            }
        }
        stage('Deploy') { 
            steps {
                echo "i am going to deploy it  "
  
                // sh "docker build --tag test-node ."
           //   catchError(){
          //         sh "docker container rm -f lao-lmis-api"
          //   }
           //    sh "cp /home/phone/LAO-LMIS-API/lao-lmis-api/.env ."
            //  sh "docker-compose up --build -d"

                // sh "docker run --privileged -d --name lao-lmis-bcel-payment-api -p 8300:8200 lao-lmis-bcel-payment-api:1.0.0"
              //  sh "docker ps"
              //  sh "curl localhost:8100"
  //           sh "docker build . -t lao-lmis-bcel-payment-api:1.0.0" 
          

            }
        }
    }
}
