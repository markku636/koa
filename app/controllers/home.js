class HomeCtrl {

    index(ctx) {
        ctx.body = 'this is home';
    }

    upload(ctx) {
        const file = ctx.request.files.file;
        ctx.body = {
            path: file.path
        };
    }

    error(ctx) {
        ctx.throw(401);
    }
}

module.exports = new HomeCtrl();