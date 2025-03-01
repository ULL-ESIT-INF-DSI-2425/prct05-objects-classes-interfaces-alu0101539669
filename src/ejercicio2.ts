export class Cancion {
    constructor(
        public nombre: string,
        public duracion: number, // en segundos
        public generos: string[],
        public single: boolean,
        public reproducciones: number
    ) {}
}

export class Disco {
    constructor(
        public nombre: string,
        public año: number,
        public canciones: Cancion[]
    ) {}

    calcularNumeroCanciones(): number {
        return this.canciones.length;
    }

    calcularDuracion(): number {
        return this.canciones.reduce((total, cancion) => total + cancion.duracion, 0);
    }

    calcularReproducciones(): number {
        return this.canciones.reduce((total, cancion) => total + cancion.reproducciones, 0);
    }
}

export class Artista {
    constructor(
        public nombre: string,
        public oyentesMensuales: number,
        public discografia: Disco[]
    ) {}

    agregarDisco(disco: Disco): void {
        this.discografia.push(disco);
    }
}

export class BibliotecaMusical {
    private artistas: Artista[] = [];

    agregarArtista(artista: Artista): void {
        this.artistas.push(artista);
    }

    mostrarBiblioteca(): void {
        console.table(this.artistas.map(a => ({
            Nombre: a.nombre,
            "Oyentes Mensuales": a.oyentesMensuales,
            "Número de Discos": a.discografia.length
        })));
    }

    buscarArtista(nombre: string): Artista | undefined {
        return this.artistas.find(artista => artista.nombre.toLowerCase() === nombre.toLowerCase());
    }

    buscarDisco(nombre: string): Disco | undefined {
        for (const artista of this.artistas) {
            const disco = artista.discografia.find(d => d.nombre.toLowerCase() === nombre.toLowerCase());
            if (disco) return disco;
        }
    }

    buscarCancion(nombre: string): Cancion | undefined {
        for (const artista of this.artistas) {
            for (const disco of artista.discografia) {
                const cancion = disco.canciones.find(c => c.nombre.toLowerCase() === nombre.toLowerCase());
                if (cancion) return cancion;
            }
        }
    }
}
