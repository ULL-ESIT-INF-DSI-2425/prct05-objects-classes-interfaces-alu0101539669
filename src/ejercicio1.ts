export class Pokemon {
    constructor(
        public nombre: string,
        public peso: number,
        public altura: number,
        public tipo: string,
        public ataque: number,
        public defensa: number,
        public velocidad: number,
        public hp: number
    ) {}

    obtenerTipo(): string {
        return this.tipo;
    }
}

export class Pokedex {
    private pokemons: Pokemon[] = [];

    agregarPokemon(pokemon: Pokemon): void {
        this.pokemons.push(pokemon);
    }

    buscarPorTipo(tipo: string): Pokemon[] {
        return this.pokemons.filter(pokemon => pokemon.obtenerTipo() === tipo);
    }

    mostrarTodos(): void {
        this.pokemons.forEach(pokemon => {
            console.log(`${pokemon.nombre} - Tipo: ${pokemon.tipo} - HP: ${pokemon.hp}`);
        });
    }
}

export class Combat {
    constructor(private pokemon1: Pokemon, private pokemon2: Pokemon) {}

    private calcularEfectividad(tipo1: string, tipo2: string): number {
        const tablaEfectividad: Record<string, Record<string, number>> = {
            "fuego": { "hierba": 2, "agua": 0.5, "electrico": 1 },
            "agua": { "hierba": 0.5, "fuego": 2, "electrico": 0.5 },
            "hierba": { "agua": 2, "fuego": 0.5, "electrico": 1 },
            "electrico": { "agua": 2, "fuego": 1, "hierba": 0.5 }
        };

        return tablaEfectividad[tipo1]?.[tipo2] ?? 1;
    }

    start(): string {
        let turno = 0;
        let [pokemonA, pokemonB] = [this.pokemon1, this.pokemon2];

        while (pokemonA.hp > 0 && pokemonB.hp > 0) {
            const efectividad = this.calcularEfectividad(pokemonA.tipo, pokemonB.tipo);
            const daño = 50 * (pokemonA.ataque / pokemonB.defensa) * efectividad;
            pokemonB.hp = Math.max(0, pokemonB.hp - daño);

            turno++;
            if (pokemonB.hp <= 0) return `${pokemonA.nombre} ha ganado el combate!`;

            [pokemonA, pokemonB] = [pokemonB, pokemonA];
        }

        return `${pokemonB.nombre} ha ganado el combate!`;
    }
}
