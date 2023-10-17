const sequelize = require('./models/modal');
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
const updateexpense=async(req,res)=>{
    try{
    const id=req.params.id;
    const update= await sequelize.update({amount:req.body.amount,expensename:req.body.expensename,expensetype:req.body,expensetype},{where:{id:id}});
    res.json(update);}
    catch (error) {
        console.log(error);
        res.status(500).send('Error update the expense');
    }
    
  
  }
sequelize.sync().then(res => {
    console.log(res);
  }).catch(err => {
    console.log(err);
  });
  
  module.exports={getexpense,postexpense,dltexpense,updateexpense};