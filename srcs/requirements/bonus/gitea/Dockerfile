FROM debian

RUN apt upgrade ; apt update ; apt install wget git -y
RUN wget https://dl.gitea.com/gitea/1.20.3/gitea-1.20.3-linux-amd64 -O /usr/local/bin/gitea
RUN mkdir -p /var/lib/gitea/{custom,data,log} ; mkdir /etc/gitea

RUN adduser git ; chown root:git /usr/local/bin/gitea ; chmod 770 /usr/local/bin/gitea
COPY ./tools /tools
COPY ./conf/app.ini /etc/gitea/app.ini

RUN chown root:git /usr/local/bin/
RUN chown git:git /etc/gitea/app.ini
USER git

WORKDIR /home/git/

CMD ["sh", "/tools/entrypoint.sh"]
