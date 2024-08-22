const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        // userNewUrlParser and useUnifiedTopology is deprecated
        /* await mongoose.connect(process.env.DB_CONNECTION + process.env.DB_NAME, {
               useNewUrlParser: true,
               useUnifiedTopology: true,
           }); */
        await mongoose.connect(process.env.DB_CONNECTION + process.env.DB_NAME);
        console.log('MongoDB connected...');

    } catch (error) {
        console.error(error.message);
        process.exit(1);
    }
}

module.exports = connectDB;