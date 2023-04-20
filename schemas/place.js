const Joi = require('joi')

module.exports.placeSchema = Joi.object({
    place: Joi.object({
        title: Joi.string().required(),
        location: Joi.string().required(),
        description: Joi.string().required(),
        price: Joi.number().min(0).required(),
    }).required()
})