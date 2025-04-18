pipeline {
    agent any
    tools {
        nodejs 'nodeapp'
    }
    stages {
        stage("Clone Code from GitHub") {
            steps {
                git url: "https://github.com/shubham-shinde-442/grocery.git", branch: "main"
            }
        }

        stage("Build App") {
            steps {
                sh 'npm install --force'
            }
        }

        stage("Test") {
            steps {
                sh 'npm test -- --watchAll=false'
            }
        }

        stage("Deploy using Docker") {
            steps {
                sh "docker-compose up -d"
            }
        }
    }
}
