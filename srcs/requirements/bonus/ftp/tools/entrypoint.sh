echo "USERADD:"
useradd -d /var/www $WP_ADMIN
echo "USERMOD:"
usermod -a -G www-data $WP_ADMIN
echo "CHPASSWD:"
echo "$WP_ADMIN:$WP_PASS" | /usr/sbin/chpasswd
echo "VSFTPD:"
vsftpd
