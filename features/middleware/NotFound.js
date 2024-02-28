//Middleware is a function that manipulates both the request and the response
const NotFound = (req, res) =>{
    return res.status(404).send('Not Found');

};

module.exports = NotFound;