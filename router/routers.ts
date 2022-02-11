import { ItemInterface } from "../interface/ItemInterface.interface";

const Item = require('../api/item')
const Router = require('koa-router');
const router = new Router();

router.get('/getAll', async (ctx) => {
    try {
        const allItems = await Item.getAll();
        ctx.body = allItems;
    } catch (e) {
        console.error('err', e)
        ctx.status = 500;
        ctx.body = 'Internal error';
    }
})
router.post('/addItem', async (ctx) => {
    try {
        const body: ItemInterface = ctx.request.body
        const newItem = await Item.addItem(body)
        ctx.body = newItem;
    } catch (e) {
        console.error('err', e)
        ctx.status = 500;
        ctx.body = 'Internal error';
    }
})
router.get('/item/:id', async (ctx) => {
    try {
        const id: string = ctx.params.id 
        const item = await Item.getItemById({ _id: id });
        ctx.body = item;
    } catch (e) {
        console.error('err', e)
        ctx.status = 500;
        ctx.body = 'Internal error';
    }
})
router.patch('/updateItem', async (ctx) => {
    try {
        const body: ItemInterface = ctx.request.body
        const item = await Item.updateItem(body)
        ctx.body = item;
    } catch (e) {
        console.error('err', e)
        ctx.status = 500;
        ctx.body = 'Internal error';
    }
})
router.delete('/item/:id', async (ctx) => {
    try {
        const id: string = ctx.params.id 
        const item = await Item.deleteItemById({ _id: id });
        ctx.body = item;
    } catch (e) {
        console.error('err', e)
        ctx.status = 500;
        ctx.body = 'Internal error';
    }
})
router.get('/allUniqueCategories', async (ctx) => {
    try {
        const itemsList = await Item.getUnicCategories();
        ctx.body = itemsList;
    } catch (e) {
        console.error('err', e)
        ctx.status = 500;
        ctx.body = 'Internal error';
    }
})
router.get('/allItemByCategory/:category', async (ctx) => {
    try {
        const category: string = ctx.params.category 
        const itemsList = await Item.getItemsByCategory({ category });
        ctx.body = itemsList;
    } catch (e) {
        console.error('err', e)
        ctx.status = 500;
        ctx.body = 'Internal error';
    }
})
router.get('/getCountsItemOrderCategory', async (ctx) => {
    try {
        const itemsList = await Item.getCountsItemOrderCategory();
        ctx.body = itemsList;
    } catch (e) {
        console.error('err', e)
        ctx.status = 500;
        ctx.body = 'Internal error';
    }
})

module.exports = router;


