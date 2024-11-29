// const path = require('path');
// const express = require('express');
// const ejs = require('ejs');

// const app = express();
// const bodyParser = require('body-parser');
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));

// console.log(__dirname);

// app.set('views', path.join(__dirname, 'views'));

// app.set('view engine', 'ejs');


// app.get('/create', (req, res) => {

//     res.render("create");

// });

// app.get('/show', (req, res) => {
//     res.render("show");
// });
// app.get('/delete', (req, res) => {
//     res.render("delete");
// });
// app.get('/update', (req, res) => {
//     res.render("update");
// });

// app.listen(1111, () => {
//     console.log('Server is running at port 8000');
// });
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
