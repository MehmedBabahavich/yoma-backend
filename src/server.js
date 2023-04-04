import express from "express";
import dotenv from "dotenv"
dotenv.config();
const PORT = process.env.API_PORT;
const app = express();
const router = express.Router();

const DB_NAME = "yoma";
const DB_USER = "root";
const DB_PASSWORD = "Freetime123$%^";
const DB_HOST = "127.0.0.1";
const DB_DIALECT = "mysql";

import Sequelize from "sequelize";
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



app.use(express.json());

app.use("/", router);


router.post("/register", (req, res) => {
    console.log(req.body);
});

router.get("/", (req, res) => {
    req.send("test");
});

app.listen(PORT, () => {
    console.log("listening on port: " + PORT);
});

