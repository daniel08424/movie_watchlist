const mongoose = require('mongoose');

const movieSchema = mongoose.Schema({
    movie : {
        type : String
    },
    image :{
        type : String
    },
    genre :{
        type : String
    },
    description:{
        type: String
    },
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User'
    }
},{
    timestamps : true
})

const Movie = mongoose.model("Movie",movieSchema);
module.exports = Movie;