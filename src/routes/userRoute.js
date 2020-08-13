const {Router} = require('express');
const router = Router();
const {renderSignupForm,
       Signup,
       rendersigninForm,
       signin,
       logout 
      } = require('../controllers/usersController');

router.get('/signup', renderSignupForm);
router.post('/signup', Signup);

router.get('/signin', rendersigninForm);
router.post('/signin', signin); 

router.get('/logout', logout);





module.exports = router;