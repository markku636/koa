const Koa = require('koa');
const koaBody = require('koa-body');

const app = new Koa();
const routing = require('./routes/main');


app.use(koaBody())


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