var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var fs = require('fs');
var path = require('path');

var promise = mongoose.connect('mongodb://localhost/RentDress');

promise.then(()=> {
  console.log("Success")
})

var models_path = path.join(__dirname, '/../models');

fs.readdirSync(models_path).forEach((file)=>{
  if(file.indexOf('.js') >= 0){
    require(models_path + '/' + file);
  }
});
