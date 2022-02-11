const mongoose =  require('mongoose')
// const mongoDB = 'mongodb://127.0.0.1/my_database';
// mongoose.connect(mongoDB);
// mongoose.Promise = global.Promise;
// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const { Schema } = mongoose;
const itemSchema = new Schema({ //mongoose.Schema
    name:String,
    category:String
})

const Item = mongoose.model('Item', itemSchema)

exports.Item = Item