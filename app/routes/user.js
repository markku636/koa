const Router = require('koa-router')
const router = new Router({
    prefix: '/users'
});
const jwt = require('jsonwebtoken')
const config = require("../config")

const {
    find,
    findById,
    create,
    update,
    delete: del,
    login
} = require("../controllers/user")

const auth = async (ctx,next) => {
    console.log(ctx)
    const {
        authorization = ''
    } = ctx.request.header;
    const token = authorization.replace("Bearer ", "")
    try {
        const user = jwt.verify(token, config.secret)
        ctx.state.user = user;
    } catch (err) {
        ctx.throw(401, err.message)
    }
    await next();
}

router.get('/', auth, find)
router.get('/:id', auth, findById)
router.post('/', auth, create)
router.post('/login', login)
router.put('/:id', auth, update)
router.delete('/:id', auth, del)
module.exports = router;