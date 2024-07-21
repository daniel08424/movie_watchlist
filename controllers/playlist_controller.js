const Movie = require('../models/movie');

module.exports.playlist1 = function(req,res){

    Movie.find({})
    .populate('user')
    .exec(function(err,movies){
        if(err){
            console.log(movies);
            console.log(err);
        }
        
        return res.render('playlist_file',{
            title:"HomePage",
            movies : movies
        });
    })
}  