//const express = require('express');
const express = require('express');

const cors = require('cors');

const UserRoute = require('./routes/UserRoute.js');

//import UserRoute from "./routes/UserRoute.js";

const app  = express();


app.use(express.json());
app.use(UserRoute);


app.use(cors({
    credentials: false,
    origin: 'http://localhost:3000'
}));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));

