const { Item } = require('./models/item')

export class ItemInterface {
    name: String;
    category: String;
}

exports.GetAll = async (ctx, next) => {
    const data: ItemInterface[] = await Item.find({})
    ctx.body = {
        status: data ? 1 : 0,
        data: data
    }
}

exports.GetItem = async (ctx, next) => {
    const id = ctx.query.id;
    const data: ItemInterface = await Item.findOne({
        id: id
    })
    ctx.body = {
        status: data ? 1 : 0,
        data: data
    }
}

exports.UpdateItem = async (ctx, next) => {
    const id = ctx.query.id;
    const data: ItemInterface = await Item.updateOne({
        id: id
    }, {}) //next
    ctx.body = {
        status: data ? 1 : 0,
        data: data
    }
}

exports.SaveItem = async (ctx, next) => {
    const name: string = ctx.query.name;
    const category: string = ctx.query.category;

    if (!name || !category) return ctx.body = { status: 0, message: "Error" }
    const data: ItemInterface = await Item.findOne({
        name: name
    })
    if (data) {
        ctx.body = {
            status: 0,
            data: "Already exists"
        }
    } else {
        try {
            const save = await Item.create({ "name": name, "category": category });
            ctx.body = {
                status: 1,
                data: save
            }
        } catch (error) {
            ctx.body = {
                status: 0,
                data: error
            }
        }
    }
    ctx.body = {
        status: data ? 1 : 0,
        data: data
    }
}



