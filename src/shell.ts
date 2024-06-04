import { peliculasESDLA } from "./datos";
import { pintarListaPeliculas } from "./ui";

document.addEventListener("DOMContentLoaded", () => {
    pintarListaPeliculas(peliculasESDLA, {titulo: "Todas las películas"});
    pintarListaPeliculas(peliculasESDLA,
        {
            titulo: "El señor de los anillos",
            filtro: {genero: "Acción", caracteristica: "genero"}
        });
    pintarListaPeliculas(peliculasESDLA,
        {
            titulo: "El hobbit",
            filtro: {genero: "Aventuras", caracteristica: "genero"}
        });
    pintarListaPeliculas(peliculasESDLA,
        {
            titulo: "Saga Star Wars",
            filtro: {genero: "Star Wars", caracteristica: "genero"}
        });
});