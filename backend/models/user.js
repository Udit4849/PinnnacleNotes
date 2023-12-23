const mongoose = require('mongoose');
const { Schema} = mongoose;

const UserSchema = new Schema({
    name:{
        type:String,
        required : true
    },
    email:{
        type:String,
        required : true,
        unique : true
    },
    password:{
        type: String,
        required : true
    },
    date:{
        type: Date,
        default:Date.now
    },
  });
  const User = mongoose.model('user', UserSchema);           // database iNotebook created & inside it collection named user is created.
  module.exports = User;