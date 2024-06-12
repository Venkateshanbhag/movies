const movies = [
    { title: "Inception", year: 2010, image: "https://tse4.mm.bing.net/th?id=OIP.5aEOEZdHxdpJTaNDNGtHNgHaK9&pid=Api&P=0&h=180", description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO." },
    { title: "The Dark Knight", year: 2008, image: "https://tse4.mm.bing.net/th?id=OIP.NN9rKH-vZbFgtH4FuoW7OwHaLH&pid=Api&P=0&h=180", description: "When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham." },
    { title: "Interstellar", year: 2014, image: "https://tse3.mm.bing.net/th?id=OIP.1w_clrEyh_2XgDQFQqMCEAHaKE&pid=Api&P=0&h=180", description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival." },
    // Add more movies here
];

document.addEventListener("DOMContentLoaded", () => {
    const searchBox = document.getElementById("searchBox");
    const movieList = document.getElementById("movieList");
    const movieDetails = document.createElement('div');
    movieDetails.className = 'movie-details';
    document.body.appendChild(movieDetails);

    const displayMovies = (movies) => {
        movieList.innerHTML = movies.map(movie => `
            <div class="movie" data-title="${movie.title}">
                <img src="${movie.image}" alt="${movie.title}">
                <h3>${movie.title}</h3>
                <p>${movie.year}</p>
            </div>
        `).join('');
    };

    displayMovies(movies);

    searchBox.addEventListener("input", (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filteredMovies = movies.filter(movie => 
            movie.title.toLowerCase().includes(searchTerm)
        );
        displayMovies(filteredMovies);
    });

    movieList.addEventListener("click", (e) => {
        const movieDiv = e.target.closest('.movie');
        if (movieDiv) {
            const movieTitle = movieDiv.getAttribute('data-title');
            const movie = movies.find(m => m.title === movieTitle);
            movieDetails.innerHTML = `
                <h2>${movie.title}</h2>
                <p><strong>Year:</strong> ${movie.year}</p>
                <p>${movie.description}</p>
                <button id="closeDetails">Close</button>
            `;
            movieDetails.style.display = 'block';
        }
    });

    movieDetails.addEventListener("click", (e) => {
        if (e.target.id === 'closeDetails') {
            movieDetails.style.display = 'none';
        }
    });
});