var path = require('path')
var Dresses = require('../controllers/dresses.js');
var users = require('../controllers/users.js')
module.exports = function(app) {
     app.post('/register', users.register)
    app.post('/create', function(req, res){
        console.log(req.body, "Routes.js: this is the /create path");
       // res.json({status: true})
        Dresses.create(req, res);

    })
    app.post('/findinguser', users.finduser);
    app.post("/gettingthedress", Dresses.getthedress);
    app.get('/getallthedress', Dresses.getallthedresses)
    app.post("/gettingsingledress", Dresses.getSingleDress);
    // app.post('/dress/search', Dresses.searchfordress);
    app.all("*", (req,res,next) => {
        res.sendfile(path.resolve("./DressApp/dist/index.html"))
    })
}
