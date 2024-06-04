import { FiltroPeliculas, Pelicula, TipoGenero } from "./modelo";

export const filtrarPeliculaPorGenero = (
    peliculas: Pelicula[], 
    genero?: TipoGenero
): Pelicula[] => peliculas.filter((pelicula) => pelicula.genero === genero);

export const filtrarPeliculas = (
    peliculas: Pelicula[],
    filtro?: FiltroPeliculas
): Pelicula[] => {
    if(!filtro) return peliculas;
    switch(filtro.caracteristica) {
        case "genero":
            return filtrarPeliculaPorGenero(peliculas, filtro.genero);
            default:
                return peliculas;
    }
};