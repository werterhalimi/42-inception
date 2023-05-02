cat << EOF 
CREATE DATABASE wordpress;
CREATE USER 'wordpress'@'%' IDENTIFIED BY '$DB_PASS';
GRANT ALL PRIVILEGES ON *.* TO 'wordpress'@'%' IDENTIFIED BY '$DB_PASS';
FLUSH PRIVILEGES;
EOF
