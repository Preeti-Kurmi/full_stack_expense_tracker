const express = require('express');
const app = express();
const sequelize = require('./models/modal');
const cors = require('cors');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const routes = require('./routes/routes');

app.use('/', routes);

const PORT = 7000;

sequelize
  .sync()
  .then(() => app.listen(PORT, () => console.log(`Server is running on port ${PORT}`)))
  .catch((err) => {
    console.error(err);
  });




