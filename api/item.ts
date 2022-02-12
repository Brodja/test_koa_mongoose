import { ItemInterface } from "../interface/ItemInterface.interface"

const Item = require('../db/models/item')

exports.getAll = async () => {
    const itemsList = await Item.find()
    return itemsList
}

exports.addItem = async (body: ItemInterface) => {
    try {
        const name: string = body.name;
        const category: string = body.category;
        const newItem = new Item({
            name,
            category
        })
        const item = await newItem.save()
        return item
    } catch (e) {
        console.log('ERROR ADD ITEM', e)
    }
}

exports.getItemById = async (id: string) => {
    try {
        const item = await Item.find(id)
        return item
    } catch (e) {
        console.log('ERROR GET ITEM BY ID', e)
    }
}

exports.updateItem = async (body: ItemInterface) => {
    try {
        if (!body.id) throw new Error("Id not exist");
        const filter = { _id: body.id }
        const item = await Item.find(filter)
        if(!item) throw new Error("Item not exist");
        const name: string = body.name;
        const category: string = body.category;
        const updateItem = await Item.findOneAndUpdate(filter, { name, category })
        const newItem = await Item.find(filter)
        return newItem
    } catch (e) {
        console.log('ERROR UPDATE ITEM', e)
    }
}

exports.deleteItemById = async (id: string) => {
    try {
        const rmItem = await Item.deleteOne(id)
        return rmItem
    } catch (e) {
        console.log('ERROR DELETE ITEM', e)
    }
}

exports.getUnicCategories = async () => {
    const itemsList = await Item.distinct('category')
    return itemsList
}

exports.getItemsByCategory = async (category: string) => {
    try {
        const itemsList = await Item.find(category)
        return itemsList
    } catch (e) {
        console.log('ERROR GET BY CATEGORY', e)
    }
}

exports.getCountsItemOrderCategory = async () => {
    const itemsList = await Item.aggregate([{ $group: { _id: "$category", count: { $sum: 1 } } }])
    return itemsList
} 