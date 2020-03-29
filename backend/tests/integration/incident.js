const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('Incident', ()=>{
    beforeEach(async () => {
        //await connection.migrate.rollback();
        await connection.migrate.latest();
    });

    afterAll(async () => {
        await connection.destroy();
    });

    it('shoud be able to create a new incident', async () => {
        const response =  await request(app)
            .post('/incident')
            .set('authorization', '')
            .send({
                title : "911 please call a doctor",
                description:"detalhe do caso ",
                value:130
            })
    });
});