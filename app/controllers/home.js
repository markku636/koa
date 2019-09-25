class HomeCtrl{

    index(ctx){
        ctx.body= 'this is home';
        
    }

    error(ctx) {        
        ctx.throw(401);
    }

}

module.exports = new HomeCtrl();