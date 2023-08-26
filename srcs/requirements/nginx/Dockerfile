FROM debian:bullseye

RUN apt-get update && apt-get upgrade && apt-get install -y nginx openssl
RUN mkdir /etc/nginx/ssl
COPY ./conf/input /etc/nginx/ssl/input
COPY ./html/ /var/www/resume/
COPY ./public/ /var/www/gitea-public/
RUN openssl req -newkey rsa:4096 -x509 -sha256 -days 365 -nodes -out /etc/nginx/ssl/cert.pem -keyout /etc/nginx/ssl/key.pem < /etc/nginx/ssl/input ; rm -rf /etc/nginx/ssl/input
COPY ./conf/default /etc/nginx/conf.d/default.conf
RUN chown -R www-data /var/www/
RUN chmod -R 755 /var/www/
CMD ["nginx", "-g", "daemon off;"]
