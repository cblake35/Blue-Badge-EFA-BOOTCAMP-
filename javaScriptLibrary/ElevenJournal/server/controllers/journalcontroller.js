const Express = require("express");
const router = Express.Router();
//injecting the validateJWT variable directly is best when we have a controller where a specific number of the routes need to be restricted
let validateJWT = require("../middleware/validate-jwt"); 

router.get('/practice', validateJWT, (req, res) => {
    res.send('Hey! this is a practice route!')
});

router.get('/about', (req, res) => {
    res.send('This is the about route')
});

module.exports = router;