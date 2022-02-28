const Games = require('../models/Games.js');

class Controllers_games {
	constructor(){}

 async getAll(req,res,next){
        try{
                const ALL = await Games.findAll();
		console.log('###res',res)
                return res.status(200).json(ALL);
        }catch (error){
                return res.status(500).json(error)
        }
 }
 async getOne(req,res,next){
        try{
                const GAMES = await Games.findOne({where:{id:req.params.id}});
                return res.status(200).json(GAMES);
        }catch (error){
                return res.status(500).json(error);
        }
 }
}
module.exports = Controllers_games;
