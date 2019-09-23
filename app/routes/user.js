const Router = require('koa-router')
const router = new Router({prefix:'/users'});

const {find, findById, create, update,delete:del} = require("../controllers/user")



const db = [{'name':'ivy'}]  // 內存

router.get('/',)

router.get('/:id',findById)

router.post('/',create )

router.put('/',update)

router.delete('/:id',del)

module.exports = router;