//apikey//e159f7cbd80b4470b553518a903597c4
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
        http://localhost:3001/api/v1/games     	GET off getAll
        				   /:id	GET off getOne
                                        	POST off
                                        	PUT off
                                        	DELETE off`);
        server.listen(process.env.PORT || 3100,async () => {
    	 const getApi = await axios.get("https://api.rawg.io/api/games?key=e159f7cbd80b4470b553518a903597c4")
	console.log('###getApi.data.results',getApi.data.results.length)
	const newbase = getApi.data.results.map( game => {
      				Games.findOrCreate({
        				where: {
        				id: game.id
					},
				})
	})});

      });
}catch (error){
        console.error(error)
}
})()
