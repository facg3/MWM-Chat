const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');

const routes = require('./controllers/routes');


const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.engine(
  'hbs',
  exphbs({
    extname: 'hbs',
    layoutsDir: path.join(__dirname, 'views', 'layouts'),
    partialsDir: path.join(__dirname, 'views', 'partials'),
    defaultLayout: 'main'
  })
);

app.set('port', process.env.PORT || 8000);
app.use(routes);

module.exports = app;
