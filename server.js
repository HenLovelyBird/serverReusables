const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const listEndpoints = require("express-list-endpoints");


const app = express();
dotenv.config();

// Middleware that transforms the raw string of req.body into json
app.use(express.json());

app.use(cors);

// Endpoints list
// eslint-disable-next-line no-console
console.log(listEndpoints(app));

// Server listen
app.listen(process.env.PORT, () =>
    console.log(`Node server listening on port ${process.env.PORT}!`)
);