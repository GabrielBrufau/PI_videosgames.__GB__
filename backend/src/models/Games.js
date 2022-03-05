
const Sequelize = require('sequelize');
const {conn} = require('../utils/db.js');
const Games = conn.define('Games',{
    	id: { 
      		type: Sequelize.INTEGER,
      		primaryKey: true,
      		allowNull: false,      
    	},
	name:{
		type: Sequelize.STRING,
		allowNull:false,
		unique:false
	},
	released:{
                type:Sequelize.STRING
        },
        background_image:{
                type:Sequelize.STRING,
                allowNull:false
        },
	updated:{
		type:Sequelize.STRING
	},
	platforms:{
		type:Sequelize.ARRAY(Sequelize.TEXT)
	},
	rating:{
		type:Sequelize.DECIMAL
	},
	genres:{
		type:Sequelize.ARRAY(Sequelize.TEXT)
	}

});
module.exports = Games;
