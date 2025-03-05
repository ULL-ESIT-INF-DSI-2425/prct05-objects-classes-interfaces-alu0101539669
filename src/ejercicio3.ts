// Ejercicio

/**
 * Clase vehiculo
 */

export  abstract class vehiculo {
    constructor(private matricula: string, private marca: string, private modelo: string, private cilindrada: number, private potencia: number, private color: string) {}

    getMatricula(): string { return this.matricula; }
    getMarca(): string { return this.marca; }
    getModelo(): string { return this.modelo; }
    getCilindrada(): number { return this.cilindrada; }
    getColor(): string { return this.color; }
    getPotencia(): number { return this.potencia; }

    abstract getData(): string;
    
}

/**
 * Clase Coche
*/
export class Coche extends vehiculo {
    constructor(matricula: string, marca: string, modelo: string, cilindrada: number, potencia: number, color :string, private numeroPuertas: number, private descapotable: boolean) {
        super(matricula, marca, modelo, cilindrada, potencia, color);
    }

    getData(): string {
        return `Coche: ${this.getMarca()} ${this.getModelo()}, Matrícula: ${this.getMatricula()}, Color: ${this.getColor()}, Puertas: ${this.numeroPuertas}, Descapotable¿?: ${this.descapotable} `;
      }
}

/**
 * Clase Moto
 */

export class Moto extends vehiculo {
    constructor(matricula: string, marca: string, modelo: string, cilindrada: number, potencia: number, color :string, private TipoDeManillar: string, private TipoDeEscape: string ) {
        super(matricula, marca, modelo, cilindrada, potencia, color);
    }

    getData(): string {
        return `Moto: ${this.getMarca()} ${this.getModelo()}, Matrícula: ${this.getMatricula()}, Color: ${this.getColor()}, Tipo de manillar: ${this.TipoDeManillar}, Tipo de escape ${this.TipoDeEscape}`;
      }

}
