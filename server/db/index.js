const mongoose = require('mongoose')

mongoose
// .connect('mongodb://127.0.0.1:27017/bertoni-test', { useNewUrlParser: true })
    .connect('mongodb+srv://flacs5:Diego2011@cluster0.s04bn.mongodb.net/bertoni-test?retryWrites=true&w=majority', { useNewUrlParser: true })
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db