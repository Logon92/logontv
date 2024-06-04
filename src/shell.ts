import { peliculasESDLA } from "./datos";
import { pintarListaPeliculas } from "./ui";

document.addEventListener("DOMContentLoaded", () => {
    pintarListaPeliculas(peliculasESDLA, {titulo: "Universo Tolkien"});
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
});