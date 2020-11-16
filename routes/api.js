var express = require('express');
var router = express.Router();

const Info = require("../model/schema");

/* GET users listing. */
router.get('/:info', async function(req, res, next) {
  const newInfo = new Info({
    content : req.params.info
  });

  await newInfo.save();
  res.status(200).send(true);
});

module.exports = router;
