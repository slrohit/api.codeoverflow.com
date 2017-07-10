var HackerEarth=require('hackerearth-node');
const router = require('express').Router();

router.post('/run', runCode);

function runCode(req, res) {
  var hackerEarth=new HackerEarth('cc3087d36ff47577b3057bcd9ad6e2e7b54fb55b','');
  const config = {};
  config.time_limit = 1;
  config.memory_limit = 323244;
  config.source = req.body.code;
  config.input = req.body.input;
  config.language= req.body.lang;
  hackerEarth.run(config)
             .then((result) => {
               res.send(result);
             })
             .catch((err) => {
               res.send(err);
             });
}

module.exports = router;