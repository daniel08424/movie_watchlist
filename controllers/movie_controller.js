const Movie = require('../models/movie');

module.exports.playlist = function(req,res){

    Movie.create({
        movie : req.body.title,
        image : req.body.image,
        genre : req.body.genre,
        description : req.body.description,
        user : req.user._id
        
    },function(err,list){
        if(err){
            console.log(err);
        }
        console.log("Saved to playlist");
        return res.redirect('../playlist');
    }
    )
}

module.exports.destroy = function(req,res){

    Movie.findById(req.params.id, function(err, movie){
        movie.remove();
        console.log("Deleted movie from Playlist");
        
        return res.redirect('back');

    });
}