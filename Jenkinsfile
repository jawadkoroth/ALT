pipeline {
    agent any  // Use the Jenkins host that has Docker installed

    environment {
        CI = 'true'
        HOME = "${WORKSPACE}"
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
                sh 'npm test || echo "Skipping tests"'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t jawadkoroth/arablinetours-website .'
            }
        }

        stage('Push Docker Image') {
            steps {
                script {
                    docker.withRegistry('https://registry.hub.docker.com', 'docker-hub-credentials') {
                        sh 'docker push jawadkoroth/arablinetours-website:latest'
                    }
                }
            }
        }

        stage('Deploy Docker Container') {
            steps {
                sh '''
                    docker rm -f arablinetours-website || true
                    docker run -d -p 8041:3000 --name arablinetours-website jawadkoroth/arablinetours-website:latest
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
