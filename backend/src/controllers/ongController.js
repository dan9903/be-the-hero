const crypto =  require('crypto');
//database connection
const connection = require('../database/connection');

//o async torna a função assincrona fazendo com que ela finalize somente quando executou o await no caso a função de insert;
module.exports = {
    async index (request, response) {
        const ongs = await connection('ongs').select('*');
        return response.json(ongs);
    },

    async create(request, response) {
        const {name, email, whatsapp, city, uf } = request.body;
        const id = crypto.randomBytes(4).toString('HEX');
        
        await connection('ongs').insert({ id, name, email,whatsapp, city, uf });
        return response.json({ id });
    }
}