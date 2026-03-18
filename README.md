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

## Associations between models

```
find relation between models.

suppose if relation is between city and airport,it will be one to many relation because one city can have multiple airports.

so the associations as follows:
    in case of the one who have many connections,
        airport.belongsto(models.city,{
            foreignKey:"city_id",
            onDelete:"CASCADE"
        })

        city.hasMany(models.airport,{
            foreignKey:"city_id"
        })
```

## Folder and there usecases

```
### Migrations folder
----------------------
This folder shows incremental changes on database level.Its like what is getting saved inside database.

### Seeders
--------------
This folder is use to penetrate dummy data inside our tables, to check if things are working fine.
```
