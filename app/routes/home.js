const Router = require('koa-router')
const router = new Router({prefix:'/home'});

const {index,error,upload}=  require('../controllers/home')


router.get('/',index)
router.get('/error',error)
router.post('/upload',upload)



module.exports = router;