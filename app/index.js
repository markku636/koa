const Koa = require('koa');
const koaBody = require('koa-body');
const error  = require('koa-json-error')
const parameter = require('koa-parameter');

const app = new Koa();
const routing = require('./routes/main');
const mongoose = require('mongoose')
const config = require('./config.js')

//// maunal error handle / cannot control 404
// app.use(async(ctx,next)=>{
// try
// {
// await next();

// }
// catch(err)
// {
//   ctx.status = err.status || err.statusCode || 500;
//   ctx.body ={ message:err.message}
// }
// })
mongoose.connect(config.connectionString,{ useUnifiedTopology: true, useNewUrlParser: true,
    useFindAndModify:true
},()=> console.log('mongo connect success'))
mongoose.connection.on('error',console.error)


app.use(parameter(app))
app.use(koaBody())
app.use(error({
postFormat:(e,{stack,...reset}) => process.env.NODE_ENV
}))


routing(app)

// app.use(router.routes())
// app.use(router.allowedMethods())
// app.use(userRouter.routes())

// app.use(async (ctx, next) => {
//     if (ctx.url === "/") {
//         ctx.body = " this is home"
//         console.log(ctx)
//     }else  if (ctx.url==="/users")
//     {
//         console.log(ctx)
//         ctx.body = "this is users";
//     }else if(ctx.url.match(/\/users\/\w+/))
//     {
//         const userId = ctx.url.match(/\/users\/(\w+)/)[1];
//         ctx.body = `這是用戶${userId}`
//     }
// });

var port = 3000
app.listen(port,()=>{

    console.log('程式啟動在' + port + 'port')
})