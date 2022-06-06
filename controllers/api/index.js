const router = require('express').Router();
const userRoutes = require('./userRoutes');
const sigRoutes = require('./sigRoutes');
const profileRoutes = require('./profileRoutes');


router.use('/users', userRoutes);
router.use('/sig', sigRoutes);
router.use('/profile', profileRoutes);


module.exports = router;
