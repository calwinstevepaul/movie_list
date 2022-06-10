const mongoose = require('mongoose');
const { Movies, validateMovies } = require('../models/Movie');

module.exports.getMovies = async (req) => {
    try {

        const MoviesArr = await Movies.find()

        return ({ status: true, data: MoviesArr, errorcode: null })


    } catch (error) {
        console.log("error in get Movie controller", error);

        if (!error.status && error.error) {
            return { status: false, error: error.error, errorcode: error.errorcode }
        }
        return { status: false, error: "server error", errorcode: 500 }
    }

}

module.exports.setMovies = async (req) => {
    try {

        //* Creating Movie 
        let MovieObj = { ...req.body };
        MovieObj._id =  mongoose.Types.ObjectId();

        //* schema Validation
        let { error } = await validateMovies(MovieObj);
        if (error) throw ({ status: false, error: error.message, errorcode: 400 });
        console.log("MovieObj",MovieObj)
        const setMovie = await Movies.create(MovieObj);


        return ({ status: true, data: setMovie, errorcode: null })


    } catch (error) {
        console.log("error in add Movie controller", error);

        if (!error.status && error.error) {
            return { status: false, error: error.error, errorcode: error.errorcode }
        }
        return { status: false, error: "server error", errorcode: 500 }
    }

}
