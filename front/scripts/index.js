class Peliculas {
    constructor(title, year, director, duration, genre, rate, poster) {
        this.title = title
        this.year = year
        this.director = director
        this.duration = duration
        this.genre = genre
        this.rate = rate
        this.poster = poster
    }
}

function toHtml(objeto) {
    const { title, year, director, duration, genre, rate, poster } = objeto


    const htmlTitle = document.createElement('h3');
    const htmlYear = document.createElement('h4');
    const htmlDirector = document.createElement('h4');
    const htmlDuration = document.createElement('h4');
    const htmlGenre = document.createElement('h4');
    const htmlRate = document.createElement('h4');
    const htmlPoster = document.createElement('img');

    htmlTitle.textContent = title
    htmlYear.textContent = year
    htmlDirector.textContent = director
    htmlDuration.textContent = duration
    htmlGenre.textContent = genre
    htmlRate.textContent = rate
    htmlPoster.src = poster

    htmlTitle.classList.add("classH3");
    htmlYear.classList.add("classH4");
    htmlDirector.classList.add("classH4");
    htmlDuration.classList.add("classH4");
    htmlGenre.classList.add("classH4");
    htmlRate.classList.add("classH4");
    htmlPoster.classList.add("classPoster");

    const nuevoDiv = document.createElement("div");
    nuevoDiv.classList.add("nuevoDiv")

    nuevoDiv.appendChild(htmlTitle);/* --- */
    nuevoDiv.appendChild(htmlYear);/* --- */
    nuevoDiv.appendChild(htmlDirector);/* --- */
    nuevoDiv.appendChild(htmlDuration);/* --- */
    nuevoDiv.appendChild(htmlGenre);/* --- */
    nuevoDiv.appendChild(htmlRate);/* --- */
    nuevoDiv.appendChild(htmlPoster); /* --- */


    /*     (
            <div>
                <div>
                    <h3> `${}`</h3>
                    <p> <b>`${}`</b> </p>
                </div>
    
                <img >`${ }`</img>
    
    
                <div>
                    <p>`${}`</p>
                    <p>`${}`</p>
                    <p>`${}`</p>
                </div>
            </div>
        ) */
    return nuevoDiv
}



/* CLASE 2HW */


function movieToHtml(data) {
    const contenedorPeliculas = document.getElementById("divFinal");
    contenedorPeliculas.innerHTML = '';

    data.forEach(movieData => {
        const { title, year, director, duration, genre, rate, poster } = movieData;
        const peli = new Peliculas(title, year, director, duration, genre, rate, poster);
        const movieHtml = toHtml(peli);
        contenedorPeliculas.appendChild(movieHtml);
    });
}

$.get("https://students-api.2.us-1.fl0.io/movies/", (data) => {
    movieToHtml(data);
});





