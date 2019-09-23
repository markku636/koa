const Router = require('koa-router')
const router = new Router({prefix:'/home'});

const {index,error}=  require('../controllers/home')


router.get('/',index)

router.get('/error',error)



module.exports = router;