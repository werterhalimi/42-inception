wp core download
wp config create --dbhost=mariadb --dbprefix=wp_  --dbname=wordpress --dbuser=wordpress --dbpass=1234
wp core install --url=wordpress --title="Your Blog Title" --admin_name=shai --admin_password=1234 --admin_email=you@example.com
php-fpm7.4 -F
