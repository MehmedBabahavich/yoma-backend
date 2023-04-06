import {db} from '../db.js'
import { DataTypes } from "sequelize";


const User = db.define("users", {
    username: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    }
});

export default User