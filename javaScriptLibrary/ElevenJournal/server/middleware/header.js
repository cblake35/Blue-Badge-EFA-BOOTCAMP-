module.exports = function(req, res, next) {
    res.header("access-control-allow-origin", "*" ); //*indicates its a wild card and everything is allowed
    res.header("access-control-allow-methods", "GET, POST, PUT, DELTE");
    res.header("access-control-allow-headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");

    next(); //tells the middleware to continue its process or sends the request to its next destination
            //not including the next() method will cause the app to break
            //next could also be used to provide additional headers if we want
}


//Headers contain special instructions for the server