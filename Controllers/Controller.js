const sequelize=require('../models/modal')
const getexpense=async (req, res) => {
    try {
      const userdata = await sequelize.findAll();
      console.log(userdata);
      res.json(userdata);
    } catch (error) {
      console.log(error);
      res.status(500).send('Error fetching expenses');
    }
  }
  const postexpense=async (req, res) => {
    const amount = req.body.amount;
    const name = req.body.description;
    const category = req.body.category;
    console.log(`Amount: ${amount}, Name: ${name}, Category: ${category}`);
  
    try {
      const user = await sequelize.create({
        amount: amount,
        expensename: name,
        expensetype: category,
      });
      console.log(user); // Log the created user
      res.status(201).json(user);
    } catch (error) {
      console.log(error);
      res.status(500).send('Error creating the expense');
    }
  }
  const dltexpense=async (req, res) => {
    try {
        const id = req.params.id;
        await sequelize.destroy({ where: { id: id } });
        res.json({ message: 'Expense deleted successfully' });
    } catch (error) {
        console.log(error);
        res.status(500).send('Error deleting the expense');
    }
}

const updateexpense = async (req, res) => {
  try {
    const id = req.params.id;
    const { amount, description, category } = req.body;

    const updatedExpense = {
      amount: amount,
      expensename: description,
      expensetype: category
    };

    await sequelize.update(updatedExpense, { where: { id: id } });
    res.json({ message: 'Expense updated successfully' });
  } catch (error) {
    console.log(error);
    res.status(500).send('Error updating the expense');
  }
};
  

  module.exports={getexpense,postexpense,dltexpense,updateexpense};