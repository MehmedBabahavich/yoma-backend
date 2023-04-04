import { Sequelize, DataTypes } from 'sequelize';

const DB_NAME = "yoma";
const DB_USER = "root";
const DB_PASSWORD = "Freetime123$%^";
const DB_HOST = "127.0.0.1";
const DB_DIALECT = "mysql";

const sequelize = new Sequelize(
    DB_NAME,
    DB_USER,
    DB_PASSWORD,
    {
        host: DB_HOST,
        dialect: DB_DIALECT
    }
);

sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
 }).catch((error) => {
    console.error('Unable to connect to the database: ', error);
 });

 const User = sequelize.define("users", {
    username: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    }
 });

 sequelize.sync({force: true}).then(() => {
    console.log("user added!");
 }).catch((err) => {
    console.log(err);
 });