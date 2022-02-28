const Sequelize = require('sequelize');
const {conn} = require('../utils/db.js');
const Games = conn.define('Games',{
    id: { 
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,      
    },  
});
module.exports = Games;
