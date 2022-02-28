const router = require('express').Router();
const games = require("./games.js");



router.use("/games", games);



module.exports = router;
