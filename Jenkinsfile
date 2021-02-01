pipeline {
  agent any
  environment {
    mainBranch = 'dev'
    projectName = 'internship-fe-team4'
    deployDir = "/opt/tomcat/webapps/${projectName}"
  }
  stages {
    stage('Install') {
      steps {
        sh 'yarn install'
      }
    }
    stage('Build') {
      steps {
        sh 'yarn build'
      }
    }
    stage('Deploy') {
      when {
        branch env.mainBranch
      }
      steps {
        sh "echo Deploying from ${mainBranch}..."
        sh "sudo cp -r ./build/* ${deployDir}"
      }
    }
    stage('Cleanup') {
      steps {
        sh 'echo Cleanup...'
        sh 'sudo rm -r ./build/'
      }
    }
  }
}
