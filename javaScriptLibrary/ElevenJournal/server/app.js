const Express = require("express");
const app = Express();
const dbConnection = require("./db");
require("dotenv").config();

app.use(require("./middleware/header")); //headers must ALWAYS come before routes are declared

const controllers = require("./controllers");

//this line needs to be above any routes for the routes to use express.json(). If not, code will break
app.use(Express.json());

app.use("/user", controllers.userController);
// app.use(require("./middleware/validate-jwt")); //anything beneath this will require a token to access(theyre protected)
app.use("/journal", controllers.journalController);

dbConnection.authenticate()
.then(() => dbConnection.sync())
.then(() => {
    app.listen(3000, () => {
        console.log(`[Server]: App is listening on 3000.`);
    });
})
.catch((err) => {
    console.log(`[Server]: Server crashed. Error = ${err}`);
});

