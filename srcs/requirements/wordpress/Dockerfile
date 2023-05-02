FROM debian
RUN apt update && apt upgrade && apt-get install curl -y && apt-get install php-fpm php-mysqli -y
RUN apt-get install mariadb-client -y
RUN curl https://raw.githubusercontent.com/wp-cli/builds/gh-pages/phar/wp-cli.phar -o /usr/local/bin/wp
RUN chmod +x /usr/local/bin/wp && mkdir -p /var/www && mkdir -p /run/php
WORKDIR /var/www
COPY ./conf/www.conf /etc/php/7.4/fpm/pool.d/www.conf
RUN mkdir -p /tmp
COPY ./tools/entrypoint.sh /tmp/entrypoint.sh
RUN chmod +x /tmp/entrypoint.sh
RUN chown www-data: /var/www/
RUN chown www-data: /var/log/
RUN chown www-data: /run/php/
USER www-data
CMD ["sh", "/tmp/entrypoint.sh"]
