const {Router} = require('express');
const router = Router();
const {renderCard, card} = require('../controllers/shopcontroller');

router.get('/card',renderCard);

router.post('/card', card);


module.exports = router;