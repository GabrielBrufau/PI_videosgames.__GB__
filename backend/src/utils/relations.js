const Games = require('../models/Games.js');
const activiti = require('../models/activity.js')



console.log('#console Countries',Countries)
console.log('#console Activity ',Activity)
Countries.belongsToMany(Activity, { as:'relations', through: 'countryactivities'  });
Activity.belongsToMany(Countries, { as:'relations', through: 'countryactivities'  });
