const router = require('express').Router();

router.use('/rooms', require('./rooms'));
router.use('/friends', require('./friends'));

router.use(function(req, res, next) {
  const err = new Error(`Oopsies! API PATH doesn't exist`);
  err.status = 404;
  next(err);
});

module.exports = router;
