const router = require("express").Router();
// const { UniqueConstraintError } = require("sequelize/types");
const { UniqueConstraintError } = require("sequelize/lib/errors");
const { UserModel } = require("../models");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

router.post("/register", async (req, res) => {

    let { email, password } = req.body.user;

    try {
        const User = await UserModel.create({
            email,
            password: bcrypt.hashSync(password, 13), //hashSync() is a bcrypt method(first argument is a string we want hashed, 2nd argument is number of time we want our first argument salted)
        });

        //sign() is the method used to create the token
        //                      payload       password             token expiration timeframe
        let token = jwt.sign({ id: User.id }, process.env.JWT_SECRET, { expiresIn: 60 * 60 * 24 });

        res.status(201).json({
            message: "User successfully registered",
            user: User,
            sessionToken: token
        });

    } catch (err) {
        if (err instanceof UniqueConstraintError) {
            res.status(409).json({
                message: "Email already in use",
            });
        } else {
            res.status(500).json({
                message: "Failed to register user",
            });
        }
    }
});

router.post("/login", async (req, res) => {

    let { email, password } = req.body.user;

    try {
        const loggedInUser = await UserModel.findOne({ //findOne() is a sequelize method
            where: {
                email: email,
            }
        });

        if (loggedInUser) {

            let passwordComparison = await bcrypt.compare(password, loggedInUser.password); //bcrypt.compare() is a bcrypt method

            if (passwordComparison) {
                //process.env allows us to hide sensitive data using .env
                let token = jwt.sign({ id: loggedInUser.id }, process.env.JWT_SECRET, { expiresIn: 60 * 60 * 24 });

                res.status(201).json({
                    message: "User succesfully logged in.",
                    user: loggedInUser,
                    sessionToken: token,
                });
            } else {
                res.status(401).json({
                    message: "Login Failed: Incorrect email or password"
                })
            }
        } else {
            res.status(401).json({
                message: "Login Failed: Incorrect email or password"
            });
        }
    } catch (err) {
        res.status(500).json({
            error: "There's an error logging in"
        })
    }
})

module.exports = router;

/* Tokenization */
//a token consists of 3 parts
// ----header(type of token and algorithm to encode/decode)
// ----payload(data being sent)
// ----signature(used by algorith to encode/decode)

/* Bcrypt(ENCRYPTION)*/
//salt - is a random string that makes the hash unpredictable
//hash - the output after salting a password(one-way calculation)

//bcrypt.compare(string, hash, callbackFunction, progressCallbackFunction) last 2 arguments are optional

