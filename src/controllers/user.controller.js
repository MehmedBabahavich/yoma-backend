import userService from "../services/user.service.js"
import validator from "validator"

function validateInput(username) {
    const errors = {};

    if (!validator.isLength(username, { min: 4, max: 16})) {
        errors.username = "input must be bettween 4 and 16 characters"
    }

    if (!validator.isAlphanumeric(username, 'en-US')) {
        errors.username = "input must contain only english characters"
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
      };
}

export default {
    register: (req, res) => {

        const {username, password} = req.body;

        const validUsername = validateInput(username);
        const validPassword = validateInput(password);

        if (validUsername.isValid && validPassword.isValid) {
            console.log("input is valid");
            userService.register({username, password});
        } else {
            res.json("input not valid");
        }

        

        // after data is inserted into db, return response with status 201 (created)
    },
    login: (req, res) => {
        
        const {username, password} = req.body;

        const validUsername = validateInput(username);
        const validPassword = validateInput(password);

        if (validUsername.isValid && validPassword.isValid) {
            console.log("input is valid");
            userService.login(req.body)
        } else {
            console.error("input not valid");
        }
        
        
    }
}