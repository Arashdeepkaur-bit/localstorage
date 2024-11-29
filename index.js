const express = require('express');
const path = require('path');
const app = express();


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));


app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    res.render('index');
});


app.get('/create', (req, res) => {
    res.render('create');
});

app.get('/update', (req, res) => {
    res.render('update');
});

app.get('/delete', (req, res) => {
    res.render('delete');
});

app.listen(3000, () => {
    console.log(`Server running at http://localhost:${3000}`);
});
