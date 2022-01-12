const mongoose = require('mongoose')

const user = "Rosa"
const pass = "Mongo1702"
const uri = `mongodb+srv://${user}:${pass}@cluster0.iw7zn.mongodb.net/node-test?retryWrites=true&w=majority`

mongoose.connect(uri).then(() => {
    console.log("conectado a Atlas!!")
}).catch(err => console.log("Esto no va", err))