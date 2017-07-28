var mongoose = require('mongoose')

var User = mongoose.model('User')

module.exports = {
  register: function(req, res){
    console.log("we're in user controller", req.body)
    User.findOne({email: req.body.email}, function(err,user){
      if(err){
        console.log(err)
        res.status(500).json({message: "AHH"})
      }
      else{
        if(user){
          console.log(err)
          res.status(500).json({message: "You have already registered with us!"})
        }
        else{
          var user = new User(req.body)
          user.save(function(err){
            if(err){
              console.log("error")
            }
            else{
              res.json({user: user, message: "Created"})
            }
          })
        }
      }
    })

  },

  finduser: function(req, res){
      console.log("I am in controller of users.js (server) in showusers")
        console.log(req.body.thatuser.email)
        User.findOne({email: req.body.thatuser.email}, function(err, user){
            if(err){
                console.log(err)
                res.status(500).json({message: "Ahhh"})
            }
            else{
                if(user){
                    if(user.password == req.body.thatuser.password){
                        console.log("in finduser!")
                        console.log(user)
                        res.json(user)
                    }
                    else{
                        res.status(402).json({message: "Password or username do not match or aleady taken"})
                    }
                }
                else{
                    res.status(401).json({message: "Sorry, you need to register!"})
                }
            }
        }) 
  }
}