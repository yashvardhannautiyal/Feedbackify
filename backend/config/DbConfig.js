const mongoose = require("mongoose");

const connectDB = async () =>{
    try{
        const conec = await mongoose.connect(process.env.MONGODB_URI);
        console.log(`MongoDB connected : ${conec.connection.host}`);
    } catch(err){
        console.log(err);
        process.exit(1); //if mongodb connection fails server stops
    }
};

module.exports = connectDB;