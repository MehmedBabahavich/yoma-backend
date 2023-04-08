import User from "../models/user.model.js";
import bcrypt from "bcryptjs"

export default {
    register: async (data) => {
        // check if user already exists    // DONE
        // hash password    //DONE
        // store in db    //DONE
        // return data to controller

        const {username, password} = data;

        // select queries always return array
        const existingUsers = await User.findAll({
            where: {
                "username": username
              }
        });

        if (existingUsers.length !== 0) {
            console.log("user exists");
        } else {
            const user = await User.create({
                username: username,
                password: password // automaticly hashed
            });
            console.log("user created");
        }
        
        
    },

    login: async (data) => {
        
        const {username, password} = data;

        const existingUsers = await User.findAll({
            where: {
                "username": username
              }
        });

        if (existingUsers.length !== 0) {
            const user = await User.findOne({
                where: {
                     username: username
                }
            });

            const isMatch = await bcrypt.compare(password, user.password);

            if (isMatch) {
                console.log("login syccessful");
            } else {
                console.log("passwords dont match"); //TODO change error name later
            }
        } else {
            console.log("user do not exist");
        }
    }
}