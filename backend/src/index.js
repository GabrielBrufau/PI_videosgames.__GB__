//apikey//e159f7cbd80b4470b553518a903597c4
//https://github.com/Janina-sc/PI-VideoGames/blob/main/api/src/routes/index.js
const server = require('./app.js');
const {conn} = require('./utils/db.js');
const routes = require('./routes/index.js');
const Games = require('./models/Games.js');
const axios = require('axios');

server.use('/api/v1', routes);

( async ()=>{
try{
     await conn.sync({force:true}).then(()=>{
        console.log(`
        # server ON 
        http://localhost:3100/api/v1/games     	GET ON getAll
        				  /:id	GET ON getOne
                                        	POST ON createOne
                                        	PUT off
                                        	DELETE off`);
        server.listen(process.env.PORT || 3100,async () => {
    	 const getApi = await axios.get("https://api.rawg.io/api/games?key=e159f7cbd80b4470b553518a903597c4")
	const newbase = getApi.data.results.map( game => {
      				Games.findOrCreate({
        				where: {
        					id: game.id,
						name:game.name,
						released:game.released,
						background_image:game.background_image,
						updated:game.updated,
						platforms:game.platforms.map(obj => obj.platform.name),
						rating:game.rating,
						genres:game.genres.map(obj => obj.name)
					},
				})
	})});

      });
}catch (error){
        console.error(error)
}
})()
