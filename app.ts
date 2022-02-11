import 'dotenv/config'
const Koa = require('koa');
const app = new Koa();
const koaBody = require('koa-body')
const myrouter = require('./router/routers')

require('./db/index');


app.use(koaBody())
app.use(myrouter.routes())
app.use(myrouter.allowedMethods());
app.listen(process.env.PORT, () => {
    console.log('Server started on port:', process.env.PORT)
});