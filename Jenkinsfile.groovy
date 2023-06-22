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



    }

    stages{

        stage('BUILD'){
            steps {
                sh 'mvn clean install -DskipTests'
            }
        }
        stage('UNIT TEST'){
            steps {
                sh 'mvn test'
            }
        }
        stage("Publish to Nexus Repository Manager") {
            steps {
                script {
                    pom = readMavenPom file: "pom.xml";
                    filesByGlob = findFiles(glob: "target/*.${pom.packaging}");
                    echo "${filesByGlob[0].name} ${filesByGlob[0].path} ${filesByGlob[0].directory} ${filesByGlob[0].length} ${filesByGlob[0].lastModified}"
                    artifactPath = filesByGlob[0].path;
                    artifactExists = fileExists artifactPath;
                    if(artifactExists) {
                        echo "*** File: ${artifactPath}, group: ${pom.groupId}, packaging: ${pom.packaging}, version ${pom.version} ARTVERSION";
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
                    else {
                        error "*** File: ${artifactPath}, could not be found";
                    }
                }
            }
        }




    }


}
