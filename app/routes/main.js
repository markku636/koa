const fs = require('fs')

module.exports = (app) =>{
fs.readdirSync(__dirname).forEach(file=>{
if(file ==='main.js') {return;}
const route = require(`./${file}`);
app.use(route.routes()).use(route.allowedMethods());
});
}