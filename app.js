const express = require('express');
const app = express();
const routes = require("./routes");
const passport = require("./config/passport");

app.use(express.json());
app.use(express.urlencoded());

app.use(passport.initialize());

app.get('/', (req, res) => res.send('Hello World!'));

app.use(routes);

module.exports = app;