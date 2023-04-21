FROM debian

EXPOSE 443
RUN apt-get update && apt-get upgrade && apt-get install -y nginx openssl
RUN mkdir /etc/nginx/ssl
RUN openssl req -newkey rsa:4096 -x509 -sha256 -days 365 -nodes -out /etc/nginx/ssl/cert.pem -keyout /etc/nginx/ssl/key.pem -subj "/C=CH/ST=Vaud/L=Rennens/O=42/OU=42/CN=shalimi.42.fr/emailAddress=shalimi@student.42lausanne.ch"
COPY ./conf/default /etc/nginx/conf.d/test.conf
CMD ["nginx", "-g", "daemon off;"]

