FROM debian:bullseye 
RUN apt-get update &&  apt-get install mariadb-server -y
RUN mkdir -p /tmp/
COPY ./conf/50-server.cnf /etc/mysql/mariadb.conf.d/50-server.cnf
COPY ./tools/entrypoint.sh /tmp/entrypoint.sh
COPY ./tools/sql.sh /tmp/sql.sh
RUN chmod +x /tmp/entrypoint.sh
RUN chmod +x /tmp/sql.sh
CMD ["sh", "/tmp/entrypoint.sh"]
