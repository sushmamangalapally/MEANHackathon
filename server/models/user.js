var mongoose=require('mongoose');
var UserSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  address: String,
  unit: String,
  city: String,
  state: String
})

mongoose.model("User", UserSchema);