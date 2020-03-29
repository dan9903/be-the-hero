const express = require('express');
const { celebrate, Segments, Joi } = require('celebrate'); 

//controllers de rotas
const ongController =  require('./controllers/ongController');
const incidentController =  require('./controllers/incidentController');
const profileController =  require('./controllers/profileController');
const sessionController =  require('./controllers/sessionController');

const routes = express.Router();

//sessions route
routes.post('/sessions', celebrate({
        [Segments.BODY]: Joi.object().keys({
            id: Joi.string().required()
        })
    }), sessionController.create);
//ong routes
routes.get('/ongs', ongController.index);

routes.post('/ongs', celebrate({
        [Segments.BODY]: Joi.object().keys({
            name: Joi.string().required(),
            email: Joi.string().required().email(),
            whatsapp: Joi.string().trim().regex(/^\([1-9]{2}\) (?:[2-8]|9[1-9])[0-9]{3}\-[0-9]{4}$/).required(),
            city: Joi.string().required(),
            uf: Joi.string().required().length(2)
        })
    }), ongController.create);
//ong-incidents route
routes.get('/profile', celebrate({
        [Segments.HEADERS]: Joi.object({
            authorization: Joi.string().required()
        }).unknown()
    }), profileController.index);
//incident routes
routes.get('/incidents', celebrate({
        [Segments.QUERY]: Joi.object().keys({
            page: Joi.number()
        })
    }), incidentController.index);

routes.post('/incidents', celebrate({
        [Segments.HEADERS]: Joi.object({
            authorization: Joi.string().required()
        }).unknown(),
        [Segments.BODY]: Joi.object().keys({
            title: Joi.string().required(),
            description: Joi.string().required(),
            value: Joi.number().required()
        })
}),incidentController.create);

routes.delete('/incidents/:id', celebrate({
        [Segments.PARAMS]: Joi.object().keys({
            id: Joi.number().required()
        })
    }),incidentController.delete);


module.exports = routes;