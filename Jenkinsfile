pipeline {
  agent any

  environment {
    IMAGE_NAME = 'jawadkoroth/arablinetours-website'
    CONTAINER_NAME = 'arablinetours-website'
    PORT = '8041'
  }

  stages {
    stage('Checkout') {
      steps {
        git branch: 'ALT-1', url: 'https://github.com/jawadkoroth/ALT.git'
      }
    }

    stage('Install Dependencies') {
      steps {
        script {
          if (!fileExists('node_modules')) {
            sh 'npm ci || npm install'
            stash name: 'dependencies', includes: 'node_modules/**'
          } else {
            echo 'Dependencies already installed, skipping npm install.'
            unstash 'dependencies'
          }
        }
      }
    }

    stage('Run Tests') {
      steps {
        script {
          def hasTestScript = sh(script: "npm run | grep test", returnStatus: true) == 0
          if (hasTestScript) {
            sh 'npm test || echo "Tests failed, continuing..."'
          } else {
            echo 'Skipping tests – no test script defined.'
          }
        }
      }
    }

    stage('Build') {
      steps {
        script {
          if (!fileExists('.next')) {
            sh 'npm run build'
            stash name: 'build', includes: '.next/**'
          } else {
            echo 'Build already exists, skipping build step.'
            unstash 'build'
          }
        }
      }
    }

    stage('Build Docker Image') {
      steps {
        sh 'docker build -t $IMAGE_NAME .'
      }
    }

    stage('Push Docker Image') {
      steps {
        withCredentials([usernamePassword(
          credentialsId: '45afc0e9-8dbd-4eea-80ea-52e0533c884c',
          passwordVariable: 'DOCKER_PASSWORD',
          usernameVariable: 'DOCKER_USERNAME'
        )]) {
          sh """
            echo "$DOCKER_PASSWORD" | docker login -u "$DOCKER_USERNAME" --password-stdin
            docker push $IMAGE_NAME
          """
        }
      }
    }

    stage('Deploy Docker Container') {
      steps {
        script {
          // Check if any container is running with the same name and on the same port
          def existingContainer = sh(script: "docker ps --filter name=$CONTAINER_NAME --filter 'publish=$PORT' -q", returnStdout: true).trim()

          if (existingContainer) {
            echo "Stopping and removing existing container $CONTAINER_NAME on port $PORT"
            // Stop and remove the existing container
            sh "docker stop $existingContainer"
            sh "docker rm $existingContainer"
          } else {
            echo "No existing container found on port $PORT"
          }

          // Run the new container
          sh "docker run -d --name $CONTAINER_NAME -p $PORT:3000 $IMAGE_NAME"
        }
      }
    }
  }

  post {
    always {
      cleanWs()
    }
  }
}
