const mongoose = require('mongoose')

const connectToDb = async() => {
const connectionstring = process.env.mongo_uri
try {
    const connecter = await mongoose.connect(connectionstring)
    if (!connecter) {
        console.log('couldnt connnect to database');
    }else{
        console.log(' database connected successfully'); 
    }
    
} catch (error) {
    console.log('database error:', error);
}



}  


module.exports = connectToDb