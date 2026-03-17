## Flight Search Service

```
To get sequelized based folders like seeders,migrations run command:-
npx sequelize-cli init
```

```
Sequelize command to create database:
npx sequelize-cli db:create
```

```
Sequelize command to create models
npx sequelize-cli models:migrate --name City --attributes city_name:string
```

```
Sequelize command to connect our models with database
npx sequelize-cli db:migrate
```

```
Sequelize command to undo a model migrate
npx sequelize-cli db:migrate:undo
```
