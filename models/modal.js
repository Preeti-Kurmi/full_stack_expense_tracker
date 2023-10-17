
const { Sequelize } = require('sequelize');
const sequelize=require('../util/database');
const User=sequelize.define('expenses',{
 id:{
    type:Sequelize.INTEGER,
    autoIncrement:true,
    primaryKey:true,

 },
 amount:{
    type:Sequelize.INTEGER,
    allowNull:false,
 },
 expensename:{
    type:Sequelize.STRING,
    allowNull:false,
 },
 expensetype:{
    type:Sequelize.STRING,
    allowNull:false,
 }
})
    module.exports=User;