const express = require('express');
const cors = require('cors');
const passport = require('passport');

const setupDB = require('./db');
const PORT = require('./constants/serverConst');

setupDB();
const app = express();

app.use(express.json);
app.use(cors());
app.use(passport.initialize());

app.listen(PORT, () => {
    console.log(`Server was started on port: ${PORT}`);
});
