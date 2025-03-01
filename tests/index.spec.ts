import { describe, it, expect } from "vitest";
import { Pokemon, Pokedex, Combat } from "../src/ejercicio1";
import { Cancion, Disco, Artista, BibliotecaMusical } from "../src/ejercicio2";

describe("Pokemon", () => {
    it("Debe crear un Pokémon con los valores correctos", () => {
        const pikachu = new Pokemon("Pikachu", 6, 0.4, "electrico", 55, 40, 90, 100);
        expect(pikachu.nombre).toBe("Pikachu");
        expect(pikachu.tipo).toBe("electrico");
        expect(pikachu.hp).toBe(100);
    });
});

describe("Pokedex", () => {
    it("Debe agregar y buscar Pokémon por tipo", () => {
        const pokedex = new Pokedex();
        const charmander = new Pokemon("Charmander", 8.5, 0.6, "fuego", 52, 43, 65, 100);
        const squirtle = new Pokemon("Squirtle", 9, 0.5, "agua", 48, 65, 43, 100);

        pokedex.agregarPokemon(charmander);
        pokedex.agregarPokemon(squirtle);

        const resultado = pokedex.buscarPorTipo("fuego");
        expect(resultado.length).toBe(1);
        expect(resultado[0].nombre).toBe("Charmander");
    });
});

describe("Combat", () => {
    it("Debe calcular la efectividad de los ataques correctamente", () => {
        const charmander = new Pokemon("Charmander", 8.5, 0.6, "fuego", 52, 43, 65, 100);
        const bulbasaur = new Pokemon("Bulbasaur", 6.9, 0.7, "hierba", 49, 49, 45, 100);

        const combate = new Combat(charmander, bulbasaur);
        expect(combate.start()).toContain("Charmander ha ganado el combate!");
    });

    it("Debe permitir que un Pokémon de agua venza a uno de fuego", () => {
        const squirtle = new Pokemon("Squirtle", 9, 0.5, "agua", 48, 65, 43, 100);
        const charmander = new Pokemon("Charmander", 8.5, 0.6, "fuego", 52, 43, 65, 100);

        const combate = new Combat(squirtle, charmander);
        expect(combate.start()).toContain("Squirtle ha ganado el combate!");
    });
});

describe("Cancion", () => {
    it("Debe crear una canción con los valores correctos", () => {
        const cancion = new Cancion("Bohemian Rhapsody", 354, ["Rock"], true, 5000000);
        expect(cancion.nombre).toBe("Bohemian Rhapsody");
        expect(cancion.duracion).toBe(354);
        expect(cancion.reproducciones).toBe(5000000);
    });
});

describe("Disco", () => {
    it("Debe calcular correctamente el número de canciones, la duración y las reproducciones", () => {
        const cancion1 = new Cancion("Song 1", 200, ["Pop"], false, 1000);
        const cancion2 = new Cancion("Song 2", 180, ["Pop"], true, 500);
        const disco = new Disco("Best Album", 2020, [cancion1, cancion2]);

        expect(disco.calcularNumeroCanciones()).toBe(2);
        expect(disco.calcularDuracion()).toBe(380);
        expect(disco.calcularReproducciones()).toBe(1500);
    });
});

describe("BibliotecaMusical", () => {
    it("Debe agregar un artista y permitir su búsqueda", () => {
        const biblioteca = new BibliotecaMusical();
        const artista = new Artista("Queen", 30000000, []);

        biblioteca.agregarArtista(artista);
        expect(biblioteca.buscarArtista("Queen")).toBe(artista);
    });

    it("Debe permitir buscar discos y canciones", () => {
        const biblioteca = new BibliotecaMusical();
        const cancion = new Cancion("We Will Rock You", 123, ["Rock"], true, 10000000);
        const disco = new Disco("News of the World", 1977, [cancion]);
        const artista = new Artista("Queen", 30000000, [disco]);

        biblioteca.agregarArtista(artista);

        expect(biblioteca.buscarDisco("News of the World")).toBe(disco);
        expect(biblioteca.buscarCancion("We Will Rock You")).toBe(cancion);
    });
});
