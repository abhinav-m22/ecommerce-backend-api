const express = require('express');
const bodyParser = require('body-parser');
const cartRoutes = require('./routes/cart');
const userRoutes = require('./routes/user');
const productsRoutes = require("./routes/products.js")

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use('/carts', cartRoutes);
app.use('/users', userRoutes);
app.use('/products', productsRoutes);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
