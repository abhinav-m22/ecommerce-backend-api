const express = require('express');
const bodyParser = require('body-parser');
const cartRoutes = require('./routes/cart');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use('/carts', cartRoutes);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
