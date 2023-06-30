pipeline {
    agent any

    tools {
        maven "MAVEN3"
        jdk "oraclejdk11"
    }

    environment {
        SNAP_REPO = "onlineschool-snapshot"
        NEXUS_USER = "ADMIN"
        NEXUS_PASS = "onlineschool"
        RELEASE_REPO = "onlineschool-release"
        CENTRAL_REPO = "onlineschool-maven-central"
        NEXUSIP = "172.31.31.64"
        NEXUSPORT = "8081"
        NEXUS_GRP_REPO = "onlineschool-group"
        NEXUS_LOGIN = "nexuslogin"
        SONARSERVER = "sonarserver"
        SONARSCANER = "sonarscanner"
        ARTVERSION = "1.0" // Added ARTVERSION to be used in nexusArtifactUploader step
        NEXUS_VERSION = "3" // Added NEXUS_VERSION
        NEXUS_PROTOCOL = "http" // Added NEXUS_PROTOCOL
        NEXUS_URL = "http://${NEXUSIP}:${NEXUSPORT}" // Added NEXUS_URL
        NEXUS_REPOGRP_ID = "onlineschool-group" // Replace with your actual repo group ID
        NEXUS_REPOSITORY = "onlineschool-group" // Replace with your actual repository ID
        NEXUS_CREDENTIAL_ID = "nexuslogin" // Replace with your actual credential ID
    }

    stages {
        stage('BUILD') {
            steps {
                sh 'mvn -s settings.xml clean install -DskipTests'
            }
            post {
                success {
                    echo 'Now Archiving...'
                    archiveArtifacts artifacts: '**/target/*.jar'
                }
            }
        }
        stage('UNIT TEST') {
            steps {
                sh 'mvn -s settings.xml test'
            }
        }
        stage('CODE ANALYSIS WITH CHECKSTYLE') {
            steps {
                sh 'mvn -s settings.xml checkstyle:checkstyle'
            }
            post {
                success {
                    echo 'Generated Analysis Result'
                }
            }
        }
        stage('CODE ANALYSIS with SONARQUBE') {
            environment {
                scannerHome = tool "${SONARSCANER}"
            }
            steps {
                withSonarQubeEnv("${SONARSERVER}") {
                    sh "${scannerHome}/bin/sonar-scanner -Dsonar.projectKey=vprofile \
                        -Dsonar.projectName=online-school \
                        -Dsonar.projectVersion=${ARTVERSION} \
                        -Dsonar.sources=src/ \
                        -Dsonar.java.binaries=target/test-classes/com/example/onlineschool/services/ \
                        -Dsonar.junit.reportsPath=target/surefire-reports/ \
                        -Dsonar.jacoco.reportsPath=target/jacoco.exec \
                        -Dsonar.java.checkstyle.reportPaths=target/checkstyle-result.xml"
                }
                timeout(time: 10, unit: 'MINUTES') {
                    waitForQualityGate abortPipeline: true
                }
            }
        }
        stage("Publish to Nexus Repository Manager") {
        steps {

                nexusArtifactUploader(
                        nexusVersion: NEXUS_VERSION,
                        protocol: NEXUS_PROTOCOL,
                        nexusUrl: NEXUS_URL,
                        groupId: NEXUS_REPOGRP_ID,
                        version: ARTVERSION,
                        repository: NEXUS_REPOSITORY,
                        credentialsId: NEXUS_CREDENTIAL_ID,
                        artifacts: [
                            [artifactId: pom.artifactId,
                            classifier: '',
                            file: artifactPath,
                            type: pom.packaging],
                            [artifactId: pom.artifactId,
                            classifier: '',
                            file: "pom.xml",
                            type: "pom"]
                        ]
                    );
        }
    }
    }
}
