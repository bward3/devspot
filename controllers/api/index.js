const router = require('express').Router();
const userRoutes = require('./userRoutes');
const sigRoutes = require('./sigRoutes');

router.use('/users', userRoutes);
router.use('/sig', sigRoutes);

module.exports = router;
