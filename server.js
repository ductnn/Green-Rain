require('dotenv').config();

const express = require('express');
const port = process.env.PORT || 3000;

const app = new express();

app.use('/static', express.static('public'));
app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', (req, res) => {
    res.render('index');
});

app.listen(port, () => {
    console.log("Server listing on port " + port);
});
