const Controllers_games = require('../controllers/games.js');
const router = require('express').Router();
 
const games = new Controllers_games;
console.log('#console games',typeof games) //objetc
console.log('#console games.getAll',typeof games.getAll) // function
console.log('#console games.getAll()',typeof games.getAll()) //object

router
        .get('/',(req,res,next)=>games.getAll(req,res))
        .get('/:id',(req,res,next)=>games.getOne(req,res));


module.exports = router;
