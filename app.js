const sequelize = require('./models/modal');
const express = require('express');
const app = express();
//const router=express.Router();
const bodyparser = require('body-parser');
const control=require('./Controller');
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
const cors = require('cors');


app.use(cors());

app.post('/add-expense', control.postexpense);
app.get('/expenses', control.getexpense);

app.delete('/delete/:id', control.dltexpense);
app.put('/update/:id',control.updateexpense);


app.listen(7000, () => {
  console.log("success");
});
