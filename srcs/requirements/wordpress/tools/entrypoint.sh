if ! ([ -f "/var/www/wp-config.php" ];) then
	wp core download
	wp config create --dbhost=$DB_HOST --dbprefix=$DB_PREFIX  --dbname=$DB_NAME --dbuser=$DB_USER --dbpass=$DB_PASS
	wp core install --url=$WP_URL --title="$WP_TITLE" --admin_name=$WP_ADMIN --admin_password=$WP_PASS --admin_email=$WP_MAIL
	wp user create ann ann@example.com
fi

php-fpm7.4 -F
