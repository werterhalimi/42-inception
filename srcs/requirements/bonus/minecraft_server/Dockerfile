FROM debian:bullseye
RUN apt update && apt install openjdk-17-jre openjdk-17-jdk wget -y
RUN mkdir -p /server
WORKDIR /server
RUN wget https://piston-data.mojang.com/v1/objects/8f3112a1049751cc472ec13e397eade5336ca7ae/server.jar
COPY ./conf/server.properties /server/server.properties
COPY ./conf/eula.txt /server/eula.txt
CMD ["java", "-Xmx1024M", "-Xms1024M", "-jar", "server.jar"]
