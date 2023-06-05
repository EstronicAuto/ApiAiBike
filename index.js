// conf inicial
// HVLoipGR384e4aSD
//estronic
// mongodb+srv://estronic:HVLoipGR384e4aSD@cluster.xakryqr.mongodb.net/?retryWrites=true&w=majority
const express = require('express')
const mongoose = require('mongoose');
const app = express()


//rotas da API
//forma de ler json
app.use(
    express.urlencoded({
        extended: true
    })
)
 app.use(express.json())

// rota inical / endpoint
// rotas

//Person
const personRoutes = require('./routes/personRoutes')
app.use('/person', personRoutes)


//Bike
const bikeRoutes = require('./routes/bikeRoutes.Js')
app.use('/bike', bikeRoutes)

//BikeHistory
const bikeHistoryRoutes = require('./routes/bikeHistoryRoutes')
app.use('/bikehistory', bikeHistoryRoutes)
//--///////////////////////////////////
app.get('/', (req,res) =>{
    //mostrar req
    res.json({oi : 'Oi Express !'})
})


//entregar rota
mongoose.connect('mongodb+srv://estronic:HVLoipGR384e4aSD@cluster.xakryqr.mongodb.net/?retryWrites=true&w=majority')
.then(() =>{
    console.log("Banco Conectado");
    app.listen(3000)
})
.catch((err) => console.log(err))

