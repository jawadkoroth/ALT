pipeline {
    agent {
        docker {
            image 'node:20-alpine'
            args '-p 3000:3000'
        }
    }

    environment {
        CI = 'true'
        HOME = '${WORKSPACE}'
        IMAGE_NAME = 'jawadkoroth/arablinetours-website'
        DOCKER_CREDENTIALS = '45afc0e9-8dbd-4eea-80ea-52e0533c884c'
        GIT_URL = 'https://github.com/jawadkoroth/ALT.git'
        GIT_BRANCH = 'ALT-1'
    }

    stages {
        stage('Git Checkout') {
            steps {
                git branch: "${env.GIT_BRANCH}", url: "${env.GIT_URL}"
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm ci'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'npm test -- --passWithNoTests'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    app = docker.build("${env.IMAGE_NAME}")
                }
            }
        }

        stage('Push Docker Image') {
            when {
                branch 'ALT-1'  // Only for the ALT-1 branch
            }
            steps {
                script {
                    docker.withRegistry('https://registry.hub.docker.com', "${env.DOCKER_CREDENTIALS}") {
                        app.push("${env.BUILD_NUMBER}")
                        app.push("latest")
                    }
                }
            }
        }

        stage('Deploy to Docker') {
            steps {
                script {
                    // Stop and remove the old container if it exists
                    sh """
                        docker ps -q -f name=arablinetours-website | xargs -r docker stop | xargs -r docker rm
                    """
                    
                    // Run the new Docker container with the latest image
                    sh """
                        docker run -d --name arablinetours-website -p 8041:3000 ${env.IMAGE_NAME}:latest
                    """
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
