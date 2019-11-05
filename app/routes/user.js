const Router = require('koa-router')
const router = new Router({
    prefix: '/users'
});

const {
    find,
    findById,
    create,
    update,
    delete: del,
    login
} = require("../controllers/user")



const db = [{
    'name': 'ivy'
}] // 內存

router.get('/', find)

router.get('/:id', findById)

router.post('/', create)
router.post('/login', login)

router.put('/:id', update)

router.delete('/:id', del)

module.exports = router;