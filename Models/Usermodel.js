const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    FullName: { type:String , required : true  },
    UserName : { type:String , required : true , unique:true  },
    PhoneNumber: { type:String , required : true , unique:true  },
    Email: { type:String , required : true , unique:true  },
    Password: { type:String , required : true  }
})

const UserModel = mongoose.model("userModel" , UserSchema)

module.exports = UserModel