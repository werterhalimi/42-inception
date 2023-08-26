FROM debian:12
ARG DO_HOST
ARG DB_PREFIX
ARG DB_NAME
ARG DB_USER
ARG DB_PASS
ARG WP_URL
ARG WP_TITLE
ARG WP_ADMIN
ARG WP_PASS
ARG WP_MAIL

RUN apt update && apt upgrade && apt-get install curl -y && apt-get install php-fpm php-mysqli -y
RUN apt-get install mariadb-client -y
RUN curl https://raw.githubusercontent.com/wp-cli/builds/gh-pages/phar/wp-cli.phar -o /usr/local/bin/wp
RUN chmod +x /usr/local/bin/wp && mkdir -p /var/www && mkdir -p /run/php

COPY ./conf/www.conf /etc/php/7.4/fpm/pool.d/www.conf

RUN mkdir -p /tmp
COPY ./tools/entrypoint.sh /tmp/entrypoint.sh
RUN chmod +x /tmp/entrypoint.sh
RUN chown -R www-data /var/www/
RUN chmod -R 755 /var/www/
RUN chown -R www-data:www-data /var/log/
RUN chown -R www-data:www-data /run/php/

USER www-data
WORKDIR /var/www
CMD ["sh", "/tmp/entrypoint.sh"]
