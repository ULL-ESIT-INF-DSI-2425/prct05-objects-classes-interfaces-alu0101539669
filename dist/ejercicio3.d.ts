/**
 * Clase vehiculo
 */
export declare abstract class vehiculo {
    private matricula;
    private marca;
    private modelo;
    private cilindrada;
    private potencia;
    private color;
    constructor(matricula: string, marca: string, modelo: string, cilindrada: number, potencia: number, color: string);
    getMatricula(): string;
    getMarca(): string;
    getModelo(): string;
    getCilindrada(): number;
    getColor(): string;
    getPotencia(): number;
    abstract getData(): string;
}
/**
 * Clase Coche
*/
export declare class Coche extends vehiculo {
    private numeroPuertas;
    private descapotable;
    constructor(matricula: string, marca: string, modelo: string, cilindrada: number, potencia: number, color: string, numeroPuertas: number, descapotable: boolean);
    getData(): string;
}
/**
 * Clase Moto
 */
export declare class Moto extends vehiculo {
    private TipoDeManillar;
    private TipoDeEscape;
    constructor(matricula: string, marca: string, modelo: string, cilindrada: number, potencia: number, color: string, TipoDeManillar: string, TipoDeEscape: string);
    getData(): string;
}
