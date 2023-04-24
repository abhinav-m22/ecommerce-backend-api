const express = require('express');
const bodyParser = require('body-parser');
const cartRoutes = require('./routes/cart');
const userRoutes = require('./routes/user');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use('/carts', cartRoutes);
app.use('/users', userRoutes);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
