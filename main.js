const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const movieDetails = document.getElementById('movieDetails');

const url = 'http://www.omdbapi.com/?apikey=[yourkey]&';

searchButton.addEventListener('click', async () => {
    const searchTerm = searchInput.value.trim();

    if (searchTerm === '') {
        alert('Por favor, insira um termo de busca.');
        return;
    }
}
)

function displayMovies(movies) {
    movieDetails.innerHTML = '';

    movies.forEach(movie => {
        const movieElement = document.createElement('div');
        movieElement.classList.add('movie');

        const img = document.createElement('img');
        img.src = movie.Poster === 'N/A' ? 'https://via.placeholder.com/100' : movie.Poster;
        movieElement.appendChild(img);

        const title = document.createElement('h2');
        title.textContent = movie.Title;
        movieElement.appendChild(title);

        const year = document.createElement('p');
        year.textContent = `Ano: ${movie.Year}`;
        movieElement.appendChild(year);

        const type = document.createElement('p');
        type.textContent = `Tipo: ${movie.Type}`;
        movieElement.appendChild(type);

        movieElement.addEventListener('click', () => {
            fetchMovieDetails(movie.imdbID);
        });

        movieDetails.appendChild(movieElement);
    });
}

async function fetchMovieDetails(imdbID) {
    const response = await fetch(`http://www.omdbapi.com/?apikey=${url}&i=${imdbID}`);
    const data = await response.json();

    displayMovieDetails(data);
}

function displayMovieDetails(movie) {
    const movieDetailElement = document.createElement('div');
    movieDetailElement.classList.add('movie');

    const img = document.createElement('img');
    img.src = movie.Poster === 'N/A' ? 'https://via.placeholder.com/100' : movie.Poster;
    movieDetailElement.appendChild(img);

    const title = document.createElement('h2');
    title.textContent = movie.Title;
    movieDetailElement.appendChild(title);

    const year = document.createElement('p');
    year.textContent = `Ano: ${movie.Year}`;
    movieDetailElement.appendChild(year);

    const rated = document.createElement('p');
    rated.textContent = `Classificação: ${movie.Rated}`;
    movieDetailElement.appendChild(rated);

    const plot = document.createElement('p');
    plot.textContent = `Enredo: ${movie.Plot}`;
    movieDetailElement.appendChild(plot);

    const actors = document.createElement('p');
    actors.textContent = `Atores: ${movie.Actors}`;
    movieDetailElement.appendChild(actors);

    const director = document.createElement('p');
    director.textContent = `Diretor: ${movie.Director}`;
    movieDetailElement.appendChild(director);

    movieDetails.innerHTML = '';
    movieDetails.appendChild(movieDetailElement);
}
