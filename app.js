
require('dotenv').config();

const express = require('express');
const res = require('express/lib/response');

const app = express();


app.use(express.static(__dirname + '/public'));

app.use(require('./router'));


const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`http://localhost:${port}`));