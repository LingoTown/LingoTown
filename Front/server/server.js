const http = require('http');
const express = require('express');
const path = require('path');
const app = express();

app.use(express.json());
var cors = require('cors');
app.use(cors());

app.use(express.static(path.join(__dirname, '../dist')));

const server = http.createServer(app);

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});
  
server.listen(3000)
console.log("3000 port")