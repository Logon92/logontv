import { flechas } from "./constantes";
import { Pelicula, nombreClases, TipoFlecha, ListaPeliculasConfiguracion } from "./modelo";
import { filtrarPeliculas } from "./motor";

// Función para añadir las flechas
const añadirFlecha = (contenedor:HTMLDivElement, tipo: TipoFlecha): void => {
    const divFlecha = document.createElement("div");
    divFlecha.className = `flecha-${tipo}`;

    const imgFlecha = document.createElement("img");
    imgFlecha.src = tipo === "izquierda" ? flechas.left : flechas.right;
    divFlecha.appendChild(imgFlecha);

    divFlecha.addEventListener("click", () => {
        if(tipo === "izquierda"){
            contenedor.scrollBy({
                left: -contenedor.clientWidth,
                behavior: "smooth",
            });
        } else {
            contenedor.scrollBy({
                left: contenedor.clientWidth,
                behavior: "smooth",
            });
        }
    });

    contenedor.appendChild(divFlecha);
};

// Función para crear los títulos de las secciones
const crearTitulos = (tituloSeccion: string): HTMLHeadingElement => {
    const titulo = document.createElement("h2");
    titulo.textContent = tituloSeccion;
    return titulo;
};

// Función para crear los contenedores de las secciones
const crearContenedor = (nombreClase: string, contenedor:HTMLDivElement): HTMLDivElement => {
    const div = document.createElement("div");
    div.classList.add(nombreClase);
    div.id = nombreClase;
    contenedor.appendChild(div);
    return div;
};

// Refactorización crear título
const agregarTitulo = (tituloSeccion: string, contenedor: HTMLDivElement): void => {
    const titulo = crearTitulos(tituloSeccion);
    contenedor.appendChild(titulo);
};

// Refactorización agregar flechas
const pintarFlechas = (peliculaContenedor: HTMLDivElement): void => {
    añadirFlecha(peliculaContenedor, "izquierda");
    añadirFlecha(peliculaContenedor, "derecha");
};

// Refactorización pintar películas
const pintarPelicula = (pelicula: Pelicula, peliculaContenedor: HTMLDivElement): void => {
    const divPelicula = crearContenedor(nombreClases.pelicula, peliculaContenedor);
    divPelicula.innerHTML = `
        <img src="${pelicula.imagen}" alt="${pelicula.titulo}"/>
        <h3>${pelicula.titulo}</h3>
    `;
};

const pintarTodasPeliculas = (todasPeliculas: Pelicula[], peliculaContenedor: HTMLDivElement): void => 
    todasPeliculas.forEach((pelicula) => {
        pintarPelicula(pelicula, peliculaContenedor);
    });

// Función para pintar la lista de las películas
export const pintarListaPeliculas = (
    listaPeliculas: Pelicula[],
    configuracion: ListaPeliculasConfiguracion
    ): void => {
        // obtener el div principal
        const appDiv = document.getElementById("principal");
        // comprobar que existe
        if(appDiv && appDiv instanceof HTMLDivElement){
            // crear un div para las películas
            const crearDivPeliculas = crearContenedor(
                nombreClases.peliculas, 
                appDiv
            );
            
            // mejora crear título
            agregarTitulo(configuracion.titulo, crearDivPeliculas);

            // crear un div para la lista de películas
            const divListaPeliculas = crearContenedor(
                nombreClases.listaPeliculas, 
                crearDivPeliculas
            );
            
            //crear div para el contenedor de películas
            const divPeliculasContenedor = crearContenedor(
                nombreClases.peliculasContenedor, 
                divListaPeliculas
            );

            // añadir flechas
            pintarFlechas(divPeliculasContenedor);

            // filtro películas
            const peliculasFiltradas = filtrarPeliculas(
                listaPeliculas,
                configuracion.filtro
            );

            // pintar películas
            pintarTodasPeliculas(peliculasFiltradas, divPeliculasContenedor);
         }else {
            console.error("No se encontró el elemento");
        }
    };