FROM debian 
EXPOSE 3306
RUN apt-get update && apt-get upgrade &&  apt install mariadb-server -y
RUN /etc/init.d/mariadb start

