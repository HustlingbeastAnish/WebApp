const mongoose = require("mongoose");
const dotenv = require("dotenv");

const connectDB = async () => {
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI, {});
        console.log(`DataBase Connected`)
    }
};
