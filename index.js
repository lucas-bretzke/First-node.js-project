//Config inicial
const express = require('express');
const { renderSlot } = require('vue');
const mongoose = require('mongoose')
const app = express();

//foma de ler JSON  /= middlewares
app.use(
    express.urlencoded({
        extended: true
    })
)
app.use(express.json());


//Rota inicial / endpoint
app.get('/', (req, res) => {
    //mostrar requisiçâo
    res.json({ message: "Oi Express!" })

})

//mongodb+srv://LucasBretzke:<password>@apicluster.hnv3c9p.mongodb.net/?retryWrites=true&w=majority

//entregar uma porta
const DB_USER = "lucas"
const DB_PASSWORD = encodeURIComponent("28102003")

mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@apicluster.hnv3c9p.mongodb.net/bancodaapi?retryWrites=true&w=majority`)
    .then(() => {
        console.log('conectado ao mongoDB!')
        app.listen(3000)
    })
    .catch((err) => console.log('DEU ERRO', err))



//Entregar uma rota
app.listen(3000)
