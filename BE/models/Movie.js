
const Joi = require('@hapi/joi');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const joiMovies = Joi.object({
    _id: Joi.string().meta({ _mongoose: { _id: "ObjectId", ref: "Movies" } }),
    poster: Joi.string().required(), 
    releaseDate: Joi.string().required(), 
    name: Joi.string().required(),
    directedBy: Joi.string().required(),
    writtenBy: Joi.string().required(),
    producedBy: Joi.string().required(),
    cinematography: Joi.string().required(),
    language: Joi.string().required(),
});

const validateMovies = async function (orderDetails) {
    return joiMovies.validate(JSON.parse(JSON.stringify(orderDetails)));
}

const mongooseMovies = new Schema({
    _id: { type: ObjectId, ref: 'Movies' },
    poster:String,
    releaseDate: String, 
    name: String,
    directedBy: String,
    writtenBy: String, 
    producedBy: String,
    cinematography: String,
    language: String
});

const Movies = mongoose.model("Movies", mongooseMovies);

module.exports.validateMovies = validateMovies;
module.exports.Movies = Movies;