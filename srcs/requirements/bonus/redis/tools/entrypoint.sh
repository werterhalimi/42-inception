apt-get update && apt-get upgrade 
apt-get install redis-server -y

echo "requirepass $REDIS_PASS" > /etc/redis/myredis.conf 
echo "daemonize no" >> /etc/redis/myredis/conf
echo "bind redis" >> /etc/redis/myredis.conf
redis-server /etc/redis/myredis.conf
