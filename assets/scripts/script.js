let button = document.getElementById("clicked");
let Name = " ";

button.addEventListener('click', async function(e) {
    var movieName = document.getElementById('movie-name').value;
    
    const resultElement = document.getElementById('result');
    var suggest = document.getElementById('suggest');
    suggest.innerHTML = '';
    suggest.innerHTML += '<h1 style="text-align: center">Loading...</h1>'
    resultElement.innerHTML = '';
    
    setTimeout(async () => {
        const result = await fetch(`https://www.omdbapi.com/?s=${movieName}&apikey=6a4ebfb`);
        const searchResults = await result.json();
        suggest.className = '';

        if (searchResults.Response === 'True' && searchResults.Search) {
            const movies = searchResults.Search;
            console.log(movies);
            showAllMovieDetails(movies);
        } else {
            resultElement.innerHTML = `<h1>No movies found for "${movieName}"</h1>`;
        }
    }, 2000);
});


function showAllMovieDetails(movies) {
    var result = document.getElementById('result');
    var suggest = document.getElementById('suggest');
    result.innerHTML = '';
    suggest.innerHTML = '';

    movies.forEach((movie) => {
        result.innerHTML += `
        <div class = "grid_temp">
            
                <div class="movie-poster">
                <img src="${movie.Poster}" alt="Movie Poster" style="width: 240px; height: 300px; border-radius:20px">
                </div>
           
            <div class="info">
                <div class="movie-info-1">
                    <h1 class="movie-title">${movie.Title}</h1>
                    <ul class="movie-info">
                        <li class="year">Year&nbsp:&nbsp${movie.Year}</li>
                    </ul>
                </div>
            </div>
            <div>
                <button class="palylist-button" onclick="window.location.href = 'http://localhost:8000/${movie.Title}'">Click here to view</button>
            </div>
        </div>
        `;
    });
}

function showDefaultMovies() {
    
    const defaultMovies = [
        { Title: 'The Shawshank Redemption', Year: '1994', Poster: "https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_SX300.jpg" },
        { Title: 'Avengers: Infinity War', Year: '2018', Poster: 'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg' },
        { Title: 'The Godfather', Year: '1972', Poster: 'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg' },
        { Title: 'Inception', Year: '2010', Poster: 'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg' },
        { Title: 'The Dark Knight', Year: '2008', Poster: 'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg' },
        { Title: 'Oppenheimer', Year: '2023', Poster: 'https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_SX300.jpg' },
        { Title: 'Interstellar', Year: '2014', Poster: 'https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg' },
        { Title: 'Spider-Man: No Way Home', Year: '2021', Poster: 'https://m.media-amazon.com/images/M/MV5BZWMyYzFjYTYtNTRjYi00OGExLWE2YzgtOGRmYjAxZTU3NzBiXkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_SX300.jpg' },
        { Title: '12th Fail', Year: '2023', Poster: 'https://m.media-amazon.com/images/M/MV5BOTJlY2U2ZmYtMzU3Ny00ZDI3LWEwMDYtOWIxNzdhZDI5ZWRkXkEyXkFqcGdeQXVyMTY3ODkyNDkz._V1_SX300.jpg' },
        { Title: 'Soorarai Pottru', Year: '2020', Poster: 'https://m.media-amazon.com/images/M/MV5BOGVjYmM0ZWEtNTFjNi00MWZjLTk3OTItMmFjMDAzZWU1ZDVjXkEyXkFqcGdeQXVyMTI2Mzk1ODg0._V1_SX300.jpg' },
        { Title: 'Vikram', Year: '2022', Poster: 'https://m.media-amazon.com/images/M/MV5BMDRiOWNjYjUtMDI0ZC00MDMyLTkwZDItNTU5NWQ1NjEyNGYxXkEyXkFqcGdeQXVyMTIyNzY0NTMx._V1_SX300.jpg' },
        { Title: 'Premalu', Year: '2024', Poster: 'https://m.media-amazon.com/images/M/MV5BYzFmODBhMjQtNjE0ZC00ZjczLTg5ZjktNTZhYzA0YmVkNzZjXkEyXkFqcGdeQXVyMTYwMjkzMjkx._V1_SX300.jpg' },
        
    ];

    showDefaultMoviesDetails(defaultMovies);
}

function showDefaultMoviesDetails(movies){
    
    movies.forEach((movie) => {
        result.innerHTML += `
        <div class = "grid_temp">
                <div class="movie-poster">
                <img src="${movie.Poster}" alt="Movie Poster" style="width: 240px; height: 300px; border-radius:20px">
                </div>
           
            <div class="info">
                <div class="movie-info-1">
                    <h1 class="movie-title">${movie.Title}</h1>
                    <ul class="movie-info">
                        <li class="year">Year&nbsp:&nbsp${movie.Year}</li>
                    </ul>
                </div>
            </div>
            <div>
                <button class="palylist-button" onclick="window.location.href = 'http://localhost:8000/${movie.Title}'">Click here to view</button>
            </div>
        </div>
        `;
    });
}

window.onload = showDefaultMovies;

window.onpopstate = showDefaultMovies;

