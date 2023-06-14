const mongoose = require('mongoose');


async function main(){

    try{
        await mongoose.connect('mongodb+srv://estronic:HVLoipGR384e4aSD@cluster.xakryqr.mongodb.net/?retryWrites=true&w=majority')
        console.log("Banco Conectado!")
    }catch(error){
        console.log('Error: ${error}')
    }
}


module.exports = main