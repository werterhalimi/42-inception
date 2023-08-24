FROM debian:bullseye

RUN apt update && apt install adminer -y
RUN apt update && apt upgrade && apt-get install curl -y && apt-get install php-fpm php-mysqli -y
RUN mkdir -p /run/php
COPY conf/www.conf /etc/php/7.4/fpm/pool.d/www.conf
RUN mkdir -p /entrypoint ; echo "php-fpm7.4 -F" > /entrypoint/entry.sh
CMD ["php", "-S", "[::]:8080", "-t", "/usr/share/adminer"]
