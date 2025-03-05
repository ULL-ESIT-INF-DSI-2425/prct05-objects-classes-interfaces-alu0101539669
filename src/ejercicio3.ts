// Ejercicio

/**
 * Clase vehiculo
 * 
 */

export  abstract class vehiculo {
    constructor(private matricula_: string, private marca_: string, private modelo_: string, private cilindrada_: number, private potencia_: number, private color_: string) {}

    get Matricula(): string { return this.matricula_; }
    get Marca(): string { return this.marca_; }
    get Modelo(): string { return this.modelo_; }
    get Cilindrada(): number { return this.cilindrada_; }
    get Color(): string { return this.color_; }
    get Potencia(): number { return this.potencia_; }

    set Matricula(matricula){
        this.matricula_ = matricula;
    }
    set Marca(marca){
        this.marca_ = marca;
    }
    set Modelo(modelo){
        this.modelo_ = modelo;
    }
    set Cilindrada(cilindrada){
        this.cilindrada_ = this.cilindrada_;
    }
    set Color(color){
        this.color_ = color;
    }
    set Potencia(potencia){
        this.potencia_ = potencia;
    }

    abstract getData(): string;
   
}

/**
 * Clase Coche
*/

export class Coche extends vehiculo {
    constructor(matricula: string, marca: string, modelo: string, cilindrada: number, potencia: number, color :string, private numeroPuertas: number, private descapotable: boolean) {
        super(matricula, marca, modelo, cilindrada, potencia, color);
    }

    get NumeroPuertas(): number {return this.numeroPuertas;}
    get Descapotable(): boolean {return this.descapotable;}

    set NumeroPuertas(puertas){
        this.numeroPuertas = puertas;
    }

    set Descapotable(descapota){
        this.descapotable = descapota;
    }

    getData(): string {
        return `Coche: ${this.Marca} ${this.Modelo}, Matrícula: ${this.Matricula}, Color: ${this.Color}, Puertas: ${this.numeroPuertas}, Descapotable¿? ${this.descapotable}`;
    }
}

/**
 * Clase Moto
 * 
 */

export class Moto extends vehiculo {
    constructor(matricula: string, marca: string, modelo: string, cilindrada: number, potencia: number, color :string, private tipoDeManillar: string, private tipoDeEscape: string ) {
        super(matricula, marca, modelo, cilindrada, potencia, color);
    }

    get Manillar(): string {return this.tipoDeManillar;}
    get Escape(): string {return this.tipoDeEscape;}

    set Manillar(manilla){
        this.tipoDeManillar = manilla;
    }

    set Escape(escapes){
        this.tipoDeEscape = escapes;
    }

    getData(): string {
        return `Moto: ${this.Marca} ${this.Modelo}, Matrícula: ${this.Matricula}, Color: ${this.Color}, Tipo de manillar: ${this.tipoDeManillar}, Tipo de escape ${this.tipoDeEscape}`;
    }

}
