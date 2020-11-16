var express = require('express');
var router = express.Router();

const Info = require("../model/schema");

/* GET home page. */
router.get('/', async function(req, res, next) {
  const list = await Info.find({});
  res.render('index', { infos: list });
});

module.exports = router;
