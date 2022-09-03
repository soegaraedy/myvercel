//Import
const express = require("express");
const users = require("./api/users");
const cors = require("cors");
require('dotenv').config();

const mongoose = require ("mongoose");
mongoose.connect(process.env.MONGODB_URI, (err, db)=> {
    if (err) {
        return console.error('Error connecting to "%s":', "Error: ", err);
    }
    console.log('Connected successfully');
});

const db = mongoose.connection;
db.on('error', (error) => console.log(error));
db.once('open', ()=>console.log('Database Connected...'));

//Middlewares
const app  = express();
app.use(cors());
app.use(express.json());

//Routes
app.use("/api/users", users)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));