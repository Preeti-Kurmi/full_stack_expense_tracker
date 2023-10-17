const sql=require('sequelize');
const sequelize=new sql('nodesql','root','Sagar!@#123',{
    host:'localhost',
    dialect:'mysql'

})

module.exports=sequelize;