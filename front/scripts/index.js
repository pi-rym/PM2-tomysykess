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

    const nuevoDiv = document.createElement("div");
    nuevoDiv.classList.add("nuevoDiv")

    nuevoDiv.innerHTML =
        `<div >
    <h3 class="classH3">${title}</h3>
        <h4 class="classH4">${year}</h4>
        <img class="classPoster" src="${poster}" alt="">
        <div class="izq">
           <div>
              <h4 class="classH4"><b>Director: </b>${director}</h4>
              <h4 class="classH4"><b>Duración: </b>${duration}</h4>
           </div>   
        </div>   
        <div class="der">
           <div>
           <h4 class="classH4">★${rate}</h4>
           <h4 class="classH4">${genre}</h4>
           </div>   
           </div> 
           </div>  
           `

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