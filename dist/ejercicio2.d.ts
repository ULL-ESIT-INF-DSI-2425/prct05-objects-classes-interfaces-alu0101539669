/**
 * Clase Artista
 *
 * @export  Artista necesario para la BibliotecaMusical
 * @class Artista donde se almacena la información de un artista
 * @param nombre Nombre del artista
 * @param numeroDeOyentes Número de oyentes del artista
 * @param Discogrefia Discografía del artista
 * @method getNombre() Devuelve el nombre del artista
 * @method getNumeroDeOyentes() Devuelve el número de oyentes del artista
 * @method getDiscografia() Devuelve la discografía del artista
 *
 */
export declare class Artista {
    private nombre;
    private numeroDeOyentes;
    private Discogrefia;
    constructor(nombre: string, numeroDeOyentes: number, Discogrefia: Disco[]);
    getNombre(): string;
    getNumeroDeOyentes(): number;
    getDiscografia(): Disco[];
}
/**
 * Clase Disco
 *
 * @export  Disco necesario para la BibliotecaMusical
 * @class Disco donde
 * @param nombre Nombre del disco
 * @param año Año de lanzamiento del disco
 * @param canciones Canciones del disco
 * @method getNombre() Devuelve el nombre del disco
 * @method getAño() Devuelve el año de lanzamiento del disco
 * @method getCanciones() Devuelve las canciones del disco
*
*/
export declare class Disco {
    private nombre;
    private año;
    private canciones;
    constructor(nombre: string, año: number, canciones: Cancion[]);
    getNombre(): string;
    getAño(): number;
    getCanciones(): Cancion[];
}
/**
 * Clase Cancion
 *
 * @export  Cancion necesario para la BibliotecaMusical
 * @class Cancion donde se almacena la información de una canción
 * @param nombre Nombre de la canción
 * @param duracion Duración de la canción
 * @param genero Género de la canción
 * @param single Si es un single o no
 * @param numeroDeReproducciones Número de reproducciones de la canción
 * @method getNombre() Devuelve el nombre de la canción
 * @method getDuracion() Devuelve la duración de la canción
 * @method getGenero() Devuelve el género de la canción
 * @method getSingle() Devuelve si es un single o no
 * @method getNumeroDeReproducciones() Devuelve el número de reproducciones de la canción
 *
 */
export declare class Cancion {
    private nombre;
    private duracion;
    private genero;
    private single;
    private numeroDeReproducciones;
    constructor(nombre: string, duracion: number, genero: string, single: boolean, numeroDeReproducciones: number);
    getNombre(): string;
    getDuracion(): number;
    getGenero(): string;
    getSingle(): boolean;
    getNumeroDeReproducciones(): number;
}
/**
 * Clase BibliotecaMusical
 *
 * @export  BibliotecaMusical necesario para almacenar la información de los artistas
 * @class BibliotecaMusical donde se almacena la información de los artistas
 * @param artistas Array de artistas
 * @method getArtistas() Devuelve el array de artistas
 * @method mostrarArtistas() Muestra los artistas en consola
 * @method buscarArtista (nombre: string) Busca un artista por su nombre
 * @method buscarDisco (nombre: string) Busca un disco por su nombre
 *
*/
export declare class BibliotecaMusical {
    private artistas;
    constructor(artistas: Artista[]);
    getArtistas(): Artista[];
    mostrarArtistas(): void;
    buscarArtista(nombre: string): void;
    buscarDisco(nombre: string): void;
    buscarCancion(nombre: string): void;
    calcularNumeroDeCanciones(disco: Disco): number;
    calcularDuracionDeDisco(disco: Disco): number;
    calcularNumeroDeReproduccionesDeDisco(disco: Disco): number;
}
