class UserCtrl {

    find(ctx) {

        ctx.body = db;

    }

    findById(ctx) {
        ctx.body = db[ctx.params.id * 1];
    }



    create(ctx) {
        ctx.verifyParams({
            name:{type:'string', required:true},
            age:{type:'number',  required:false}
        });

        ctx.set('Allow', 'GET,POST')
        db.push(ctx.request.body)

        console.log(ctx.request.body);

        ctx.body = 'success'

    }


    update(ctx) {
        ctx.body = {
            name: 'Mark2'
        };

    }


    delete(ctx) {
        ctx.status = 204;
    }
}
module.exports = new UserCtrl();