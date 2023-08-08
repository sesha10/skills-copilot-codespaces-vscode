// Create web server

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 4001;

const comments = require('./routes/comments');
const vehicles = require('./routes/vehicles');
const contacts = require('./routes/contacts');
const products = require('./routes/products');

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(comments);
app.use(vehicles);
app.use(contacts);
app.use(products);

app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});