import User from "../models/user.model.js";

export default {
    register: async (data) => {
        // check if user already exists
        // hash password
        // store in db
        // return data to controller

        const {username, password} = data;

        // select queries always return array
        const existingUsers = await User.findAll({
            where: {
                "username": username
              }
        });

        console.log("all existing users: " + JSON.stringify(existingUsers))
        console.log(data);

        if (existingUsers.length !== 0) {
            throw new Error("user exists")
        }
        
        
    },

    login: (data) => {
        console.log(data)
    }
}