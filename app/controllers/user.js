const User = require("../models/user")
const jwt = require('jsonwebtoken')
const config = require("../config")
class UserCtrl {
    async find(ctx) {
        ctx.body = await User.find();
    }

    async findById(ctx) {
        const user = await User.findById(ctx.params.id);
        if (!user) {
            ctx.throw(404, 'User Not Found')
        }
        ctx.body = user
    }

    async create(ctx) {
        ctx.verifyParams({
            name: {
                type: 'string',
                required: true
            },
            password: {
                type: 'string',
                require: true
            },
            age: {
                type: 'number',
                required: false
            }
        });
        const {
            name
        } = ctx.request.body

        const repeatedUser = await User.findOne({
            name
        })
        if (repeatedUser) {
            ctx.throw(409, 'User 己經存在!')
        }
        // ctx.set('Allow', 'GET,POST')
        const user = await new User(ctx.request.body).save();

        ctx.body = user;
    }

    async update(ctx) {
        ctx.verifyParams({
            name: {
                type: 'string',
                require: true
            },
            password: {
                type: 'string',
                require: false
            },
            age: {
                type: 'number',
                required: false
            },
            gender:{
                type:'string'
            },
            avatar_url: {
                type: 'string',
                required: false
            },
      
            headine: {
                type: 'string',
                required: false
            },
            business:{
                type: 'string',
                required: false
            },
            localtions:{
                type: 'array',
                required: false,
                itemType:'string' // 型別必須是對的                
            },
            employments: {
                type: 'array',
                required: false,
                itemType:'object'                
            },
            educations: {
                type: 'array',
                required: false,
                itemType:'object'                
            },
            
        });

        const user = await User.findByIdAndUpdate(ctx.params.id, ctx.request.body)

        if (!user) {
            ctx.throw(404, 'user not found!')
        }

        ctx.body = user;
    }

    async delete(ctx) {
        const user = await User.findOneAndRemove(ctx.params.id)
        if (!user) {
            ctx.throw(404, 'user not found')
        }
        ctx.status = 204
        ctx.body = 'delte success';
    }

    async login(ctx) {
        ctx.verifyParams({
            name: {
                type: 'string',
                required: true
            },
            password: {
                type: 'string',
                require: true
            }
        });

        const user = await User.findOne(ctx.request.body)

        if (!user) {
            ctx.throw(401, '用戶名不存在!')
        }

        const {
            _id,
            name
        } = user;

        const token = jwt.sign({
            _id,
            name
        }, config.secret, {
            expiresIn: '1d'
        });
        ctx.body = {
            token
        };
    }
}
module.exports = new UserCtrl();