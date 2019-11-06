const path = require('path');

class HomeCtrl {

    index(ctx) {
        ctx.body = 'this is home';
    }

    upload(ctx) {
        const file = ctx.request.files.file;
        const baseName = path.basename(file.path)

        ctx.body = {
            url: `${ctx.origin}/uploads/${baseName}`
        };
    }

    error(ctx) {
        ctx.throw(401);
    }
}

module.exports = new HomeCtrl();