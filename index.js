//Import
const express = require("express");
const users = require("./api/users");

//Middlewares
const app  = express();
app.use(express.json());

//Routes
app.use("/api/users", users)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));