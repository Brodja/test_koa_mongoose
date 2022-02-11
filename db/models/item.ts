import { Schema, model, connect } from 'mongoose';
const mongoose =  require('mongoose')

const itemSchema = new Schema({
    name:String,
    category:String
})

module.exports = mongoose.model('Item', itemSchema)