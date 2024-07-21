require("dotenv").config();
const mongoose = require('mongoose');

const express = require('express');
const app = express();
const port = 8000;

// used for session cookie
const session = require('express-session');
const passport = require('passport');
const passportLocal = require('./config/passport-local-startergy');
//Mongo-store
const MongoStore = require('connect-mongo')
const Movie = require("./models/movie")


//cookie-parser
const cookieParser = require('cookie-parser');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

const db = require('./config/mongoose');

const expressLayouts = require('express-ejs-layouts');
app.use(expressLayouts);

//for styling static files
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

//static files
app.use(express.static('./assets'));

// EJS Set-up
app.set('view engine','ejs');
app.set('views','./views');

//MongoStore stores session cookies
app.use(session({
    name: 'MovieApp',
    // TODO change the secret before deployment in production mode
    secret: 'blahsomething',
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: (1000 * 60 * 100)
    },
    store : MongoStore.create(
        {
            mongoUrl : process.env.MONGODB_URL,
            autoRemove : 'disabled'
        },function(err){
            console.log(err || "Connection is fine");
        }
    )
}));


app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setAuthenticatedUser);

app.use('/',require('./routes'));


app.get('/:title', async (req, res) => {
    try {
        const movieTitle = req.params.title;
        const apiUrl = await fetch(`https://www.omdbapi.com/?t=${encodeURIComponent(movieTitle)}&apikey=6a4ebfb`);
        const MovieDetails = await apiUrl.json();

        const movieData = {
            title: MovieDetails.Title,
            year: MovieDetails.Year,
            released: MovieDetails.Released,
            country: MovieDetails.Country,
            genre: MovieDetails.Genre,
            runtime: MovieDetails.Runtime,
            actors: MovieDetails.Actors,
            writer: MovieDetails.Writer,
            language: MovieDetails.Language,
            imdbRating: MovieDetails.imdbRating,
            plot: MovieDetails.Plot,
        };

        res.render('individualMovie', { movieData, MovieDetails });
        
    } catch (error) {
        console.error('Error fetching movie details:', error);
        res.status(500).send('Internal server error.');
    }
});

app.get('/home/about', function(req, res) {
    res.render('about', { title: 'About Movie App' });
});

app.listen(port,function(err){
    if(err){
        console.log("Error: ",err);
        return;
    }
    console.log("Successfully running on port",port);
})