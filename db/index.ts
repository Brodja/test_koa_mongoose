const mongoose =  require('mongoose')
mongoose.Promise = global.Promise;
mongoose.connect(`mongodb://${process.env.HOST_DB}/${process.env.NAME_DB}`)
    .catch((e) => console.error(e))
const db = mongoose.connection;


db.once('open', () => {
    console.log(`DB open host: ${process.env.HOST_DB}, name BD: ${process.env.NAME_DB}`)
})

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.on('disconnected', console.error.bind(console, 'MongoDB disconnected'));
