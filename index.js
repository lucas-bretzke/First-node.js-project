//Config inicial
const express = require('express');
const { renderSlot } = require('vue');
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




//Entregar uma rota
app.listen(3000)






//entregar uma porta