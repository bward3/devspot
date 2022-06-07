const router = require('express').Router();
const userRoutes = require('./userRoutes');
const sigRoutes = require('./sigRoutes');
const profileRoutes = require('./profileRoutes');
const techRoutes = require('./techRoutes');


router.use('/users', userRoutes);
router.use('/sig', sigRoutes);
router.use('/profile', profileRoutes);
router.use('/tech', techRoutes);


module.exports = router;
