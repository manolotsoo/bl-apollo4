docker pull mysql:8.0.32

docker run -d \
--name mysql \
--network mysql \
-p 3307:3306 \
-e MYSQL_ROOT_PASSWORD=root \
-v /Users/manou/server-db/mysql:/etc/mysql/conf.d \
-v /Users/manou/server-db/mysql/mysql-data:/var/lib/mysql \
mysql:8.0.32

docker exec -it 8405092803c2 mysql -u root -p

docker run -d \
    --name phpmyadmin \
    --network mysql \
    -e PMA_HOST=mysql \
    -p 8888:80 \
    phpmyadmin