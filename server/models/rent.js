var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RentSchema = new mongoose.Schema({
    
    rentOn: { type: Date} ,
    rentTo:  { type: Date },
    dressId: {type: Schema.Types.ObjectId, ref: 'Dress'}
})

mongoose.model("Rent", RentSchema);