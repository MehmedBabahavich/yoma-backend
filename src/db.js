import { Sequelize } from "sequelize";

const DB_NAME = "yoma";
const DB_USER = "root";
const DB_PASSWORD = "Freetime123$%^";
const DB_HOST = "127.0.0.1";
const DB_DIALECT = "mysql";

const connectDB = async () => {

    const db = new Sequelize(
        DB_NAME,
        DB_USER,
        DB_PASSWORD,
        {
            host: DB_HOST,
            dialect: DB_DIALECT
        }
    );

    try {
        db.authenticate()
        db.sync()

        console.log("connection succesful")
    } catch (e) {
        console.log("db error:", e)
    }
    
    

    return db;
}

export const db = await connectDB()