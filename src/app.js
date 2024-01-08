const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

app.use(express.static('public'));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

const routes = require('./routes/index');
app.use('/', routes);

app.listen(port, () => {
  console.log(`La aplicación está escuchando en http://localhost:${port}`);
});
