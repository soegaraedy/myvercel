//const express = require('express');

import express from "express";

//const users = require('./api/users.js');
import users from "./api/users.js";

const app  = express();

app.use(express.json());
app.use('/api/users', users)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));