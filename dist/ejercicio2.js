"use strict";
//Ejericio2
Object.defineProperty(exports, "__esModule", { value: true });
exports.BibliotecaMusical = exports.Cancion = exports.Disco = exports.Artista = void 0;
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
class Artista {
    nombre;
    numeroDeOyentes;
    Discogrefia;
    constructor(nombre, numeroDeOyentes, Discogrefia) {
        this.nombre = nombre;
        this.numeroDeOyentes = numeroDeOyentes;
        this.Discogrefia = Discogrefia;
    }
    getNombre() { return this.nombre; }
    getNumeroDeOyentes() { return this.numeroDeOyentes; }
    getDiscografia() { return this.Discogrefia; }
}
exports.Artista = Artista;
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
class Disco {
    nombre;
    año;
    canciones;
    constructor(nombre, año, canciones) {
        this.nombre = nombre;
        this.año = año;
        this.canciones = canciones;
    }
    getNombre() { return this.nombre; }
    getAño() { return this.año; }
    getCanciones() { return this.canciones; }
}
exports.Disco = Disco;
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
class Cancion {
    nombre;
    duracion;
    genero;
    single;
    numeroDeReproducciones;
    constructor(nombre, duracion, genero, single, numeroDeReproducciones) {
        this.nombre = nombre;
        this.duracion = duracion;
        this.genero = genero;
        this.single = single;
        this.numeroDeReproducciones = numeroDeReproducciones;
    }
    getNombre() { return this.nombre; }
    getDuracion() { return this.duracion; }
    getGenero() { return this.genero; }
    getSingle() { return this.single; }
    getNumeroDeReproducciones() { return this.numeroDeReproducciones; }
}
exports.Cancion = Cancion;
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
class BibliotecaMusical {
    artistas;
    constructor(artistas) {
        this.artistas = artistas;
    }
    getArtistas() { return this.artistas; }
    mostrarArtistas() {
        console.table(this.artistas);
    }
    buscarArtista(nombre) {
        const artista = this.artistas.find(artista => artista.getNombre() === nombre);
        if (artista) {
            console.table(artista);
        }
        else {
            console.log("Artista no encontrado");
        }
    }
    buscarDisco(nombre) {
        const disco = this.artistas.flatMap(artista => artista.getDiscografia()).find(disco => disco.getNombre() === nombre);
        if (disco) {
            console.table(disco);
        }
        else {
            console.log("Disco no encontrado");
        }
    }
    buscarCancion(nombre) {
        const cancion = this.artistas.flatMap(artista => artista.getDiscografia().flatMap(disco => disco.getCanciones())).find(cancion => cancion.getNombre() === nombre);
        if (cancion) {
            console.table(cancion);
        }
        else {
            console.log("Canción no encontrada");
        }
    }
    calcularNumeroDeCanciones(disco) {
        return disco.getCanciones().length;
    }
    calcularDuracionDeDisco(disco) {
        return disco.getCanciones().reduce((acc, cancion) => acc + cancion.getDuracion(), 0);
    }
    calcularNumeroDeReproduccionesDeDisco(disco) {
        return disco.getCanciones().reduce((acc, cancion) => acc + cancion.getNumeroDeReproducciones(), 0);
    }
}
exports.BibliotecaMusical = BibliotecaMusical;
