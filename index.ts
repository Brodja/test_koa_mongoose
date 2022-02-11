// const db = await mongoose.connect('mongodb://localhost/my_database');

const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();


router
    .get('/all', (ctx, next) => {
        ctx.body = 'GET /all';
    })
    .get('/item', (ctx, next) => {
        ctx.body = 'GET /item';
    })
    .post('/item', (ctx, next) => {
        ctx.body = 'post /item';
    })
    // .put('/items/:id', (ctx, next) => {
    //     console.log('put /')
    //     ctx.body = 'put /';
    // })
    // .del('/items/:id', (ctx, next) => {
    //     console.log('del /')
    //     ctx.body = 'del /';
    // })
    .get('/allUniqueCategories', (ctx, next) => {
        console.log('allUniqueCategories')
        ctx.body = 'allUniqueCategories';
    })
    .get('/allItemByCategory', (ctx, next) => { ///?category=32423
        console.log('allUniqueCategories', ctx.query.category)
        ctx.body = 'allUniqueCategories';
    })
    .get('/getCountsItemOrderCategory', (ctx, next) => {
        console.log('allUniqueCategories')
        ctx.body = 'allUniqueCategories';
    })

app
    .use(router.routes())
    .use(router.allowedMethods());
app.listen(3000);