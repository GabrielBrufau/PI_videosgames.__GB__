const Games = require('../models/Games.js');

class Controllers_games {
	constructor(){}

 async getAll(req,res,next){
        try{
                const ALL = await Games.findAll();
		console.log('### controllers.games res',typeof res)
		console.log("#fix 1",ALL)
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
 async createOne(req,res,next){
	 try{
		 const MODEL_GAME= {
			 		id: req.body.id,
                                        name:req.body.name,
                                        released:req.body.released,
                                        background_image:req.body.background_image,
                                        updated:req.body.updated,
                                        platforms:req.body.platforms,
                                        rating:req.body.rating,
                                        genres:req.body.genres
		 };
		 try {
			 const GAME_CREATED = await Games.create(MODEL_GAME);
			 return res.status(201).json(GAME_CREATED);
		 }catch(error){
			 return res.status(500).json(error);
		 };
	 }catch(error){
		 return res.status(500).json(error);
	 };
 };
};
module.exports = Controllers_games;
