export interface Pelicula {
    titulo: string;
    resumen: string;
    genero: string;
    masVisto: boolean;
    calificacionImdb: number;
    premioGalardon: boolean;
    fechaEstreno: Date;
    imagen: string;
    }

export const nombreClases = {
    peliculas: "peliculas",
    listaPeliculas: "lista-peliculas",
    peliculasContenedor: "peliculas-contenedor",
    pelicula: "pelicula",
};

export type TipoFlecha = "izquierda" | "derecha";

export type TipoGenero = "Acción" | "Aventuras" | "Star Wars";

type TipoCaracteristica = "genero";

export interface FiltroPeliculas {
    genero?: TipoGenero;
    caracteristica: TipoCaracteristica;
};

export interface ListaPeliculasConfiguracion {
    titulo: string;
    filtro?: FiltroPeliculas;
};