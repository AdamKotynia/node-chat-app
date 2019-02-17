const path = require('path');
const express = require('express');

const publicPath = path.join(__dirname, '../public');
const port = process.env.port;

let app = express();

app.use(express.static(publicPath));

app.listen(port, () => {
    console.log(`Started on port ${port}`);
});

console.log(__dirname + '/../public');
console.log(publicPath);