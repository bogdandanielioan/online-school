pipeline {

    agent any

	tools {
        maven "MAVEN3"
        jdk  "oraclejdk11"
    }

    environment {
        SNAP_REPO = "onlineschoool-snapshot"
        NEXUS_USER= "ADMIN"
        NEXUS_PASS="onlineschool"
        RELEASE_REPO = "onlineschoool-release"
        CENTRAL_REPO = "onlineschoool-maven-central"
        NEXUSIP = "172.31.31.64"
        NEXUSPORT = "8081"
        NEXUS_GRP_REPO= "onlineschool-group"
        NEXUS_LOGIN = "nexuslogin"

asdsadsa

    }

    stages{

        stage('BUILD'){
            steps {
                sh 'mvn  -s settings.xml clean install -DskipTests'
            }
            post {
                success {
                    echo 'Now Archiving...'
                    archiveArtifacts artifacts: '**/target/*.jar'
                }
            }
        }
        stage('UNIT TEST'){
            steps {
                sh 'mvn  -s settings.xml test'
            }
        }
        stage ('CODE ANALYSIS WITH CHECKSTYLE'){
            steps {
                sh 'mvn  -s settings.xml checkstyle:checkstyle'
            }
            post {
                success {
                    echo 'Generated Analysis Result'
                }
            }
        }




    }


}
