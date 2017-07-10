const router = require('express').Router();

router.use('/users', require('./users'));
router.use('/questions', require('./questions'));
router.use('/solutions', require('./solutions'));
router.use('/code', require('./code'));


router.get('/', (req, res) => {
  res.send("codeoverflow apis");
});

module.exports = router;