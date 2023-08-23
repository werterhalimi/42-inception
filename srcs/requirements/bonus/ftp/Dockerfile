FROM debian

RUN apt update ; apt install vsftpd -y

COPY ./conf/vsftpd.conf /etc/vsftpd.conf
COPY tools/entrypoint.sh /entrypoint.sh
CMD ["sh", "/entrypoint.sh"]
