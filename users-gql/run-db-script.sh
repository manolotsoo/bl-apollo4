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

npx prisma migrate dev --name 20241031051152_profile

npx prisma db push --schema "./prisma/schema"

# doesn't work
npx prisma migrate resolve --rolled-back "20241031055601_delete_profile"


docker run --name mongodb -p 27417:27017 -e MONGO_INITDB_ROOT_USERNAME=tilt -e MONGO_INITDB_ROOT_PASSWORD=tilt -v $HOME/mongodb:/data/db -d mongo:latest

success
https://dev.to/renzhamin/setup-mongodb-replica-set-locally-in-docker-or-with-atlas-for-prisma-orm-54gp
docker run --name mongodb -p 27017:27017 -e MONGO_INITDB_ROOT_USERNAME=tilt -e MONGO_INITDB_ROOT_PASSWORD=tilt -d prismagraphql/mongo-single-replica:5.0.3
Add authentification database


db.createRole({
    role: 'root',
    db: 'userYoyo',
    privileges: ['read','write']
})

db.createUser({
    user: 'tilt',
    pwd: 'tilt',
    roles: [    
        {
            role: 'root',
            db: 'admin',
        },
    ],
});