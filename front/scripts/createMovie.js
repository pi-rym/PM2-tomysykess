function validateForm({
  title,
  year,
  director,
  duration,
  genre,
  rate,
  poster,
}) {
  if (
    !title ||
    !year ||
    !director ||
    !duration ||
    !genre[0] ||
    !rate ||
    !poster
  )
    return "Todos los campos son obligatorios";
}

function eventcreateMovie(event) {
  event.preventDefault();
  const title = document.getElementById("title").value;
  const year = document.getElementById("year").value;
  const director = document.getElementById("director").value;
  const duration = document.getElementById("duration").value;
  const genre = document.getElementById("genre").value.split(" ");
  const rate = document.getElementById("rate").value;
  const poster = document.getElementById("poster").value;

  const error = validateForm({
    title,
    year,
    director,
    duration,
    genre,
    rate,
    poster,
  });
  if (error) return alert(error);

  const newMovie = {
    title,
    year,
    director,
    duration,
    genre,
    rate,
    poster,
  };
  const axios = require("axios");
  axios
    .post("http://localhost:3000/movies", newMovie)
    .then(() => alert("Pelicula creada!"));
  if (error) return alert(error);
  return alert("Datos enviados");
}

function clearInputs() {
  document.getElementById("title").value = "";
  document.getElementById("year").value = "";
  document.getElementById("director").value = "";
  document.getElementById("duration").value = "";
  document.getElementById("genre").value = "";
  document.getElementById("rate").value = "";
  document.getElementById("poster").value = "";
}
document.addEventListener("DOMContentLoaded", () => {
  const boton1 = document.getElementById("movieForm");
  boton1?.addEventListener("submit", eventcreateMovie);

  const boton2 = document.getElementById("clearButton");
  boton2?.addEventListener("click", clearInputs);
});

module.exports = { eventcreateMovie, clearInputs };
