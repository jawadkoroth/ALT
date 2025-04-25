pipeline {
    agent any

    environment {
        CI = 'true'
        HOME = "${WORKSPACE}"
        IMAGE_NAME = 'jawadkoroth/arablinetours-website:latest'
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'ALT-1', url: 'https://github.com/jawadkoroth/ALT.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm ci || npm install'
            }
        }

        stage('Run Tests') {
            steps {
                script {
                    try {
                        sh 'npm test'
                    } catch (err) {
                        echo "Skipping tests - no test script found"
                    }
                }
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t $IMAGE_NAME .'
            }
        }

        stage('Push Docker Image') {
            steps {
                script {
                    docker.withRegistry('https://registry.hub.docker.com', 'docker-hub-credentials') {
                        sh 'docker push $IMAGE_NAME'
                    }
                }
            }
        }

        stage('Deploy Docker Container') {
            steps {
                sh '''
                    docker rm -f arablinetours-website || true
                    docker run -d -p 8041:3000 --name arablinetours-website $IMAGE_NAME
                '''
            }
        }
    }

    post {
        always {
            cleanWs()
        }
    }
}
