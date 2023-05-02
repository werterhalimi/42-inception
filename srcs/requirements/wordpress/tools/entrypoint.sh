if ! ([ -f "/var/www/wp-config.php" ];) then
	wp core download
	wp config create --dbhost=mariadb --dbprefix=wp_  --dbname=wordpress --dbuser=wordpress --dbpass=1234
	wp core install --url=https://92.107.7.129:1234 --title="Your Blog Title" --admin_name=shai --admin_password=1234 --admin_email=you@example.com
fi

php-fpm7.4 -F
