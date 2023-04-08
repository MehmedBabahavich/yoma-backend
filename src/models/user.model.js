import {db} from '../db.js'
import { DataTypes } from "sequelize";
import bcrypt from "bcryptjs"


const User = db.define("users", {
    username: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    }
});

User.beforeCreate(async (user) => {
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
})

export default User