"use strict";
// Ejercicio
Object.defineProperty(exports, "__esModule", { value: true });
exports.Moto = exports.Coche = exports.vehiculo = void 0;
/**
 * Clase vehiculo
 */
class vehiculo {
    matricula;
    marca;
    modelo;
    cilindrada;
    potencia;
    color;
    constructor(matricula, marca, modelo, cilindrada, potencia, color) {
        this.matricula = matricula;
        this.marca = marca;
        this.modelo = modelo;
        this.cilindrada = cilindrada;
        this.potencia = potencia;
        this.color = color;
    }
    getMatricula() { return this.matricula; }
    getMarca() { return this.marca; }
    getModelo() { return this.modelo; }
    getCilindrada() { return this.cilindrada; }
    getColor() { return this.color; }
    getPotencia() { return this.potencia; }
}
exports.vehiculo = vehiculo;
/**
 * Clase Coche
*/
class Coche extends vehiculo {
    numeroPuertas;
    descapotable;
    constructor(matricula, marca, modelo, cilindrada, potencia, color, numeroPuertas, descapotable) {
        super(matricula, marca, modelo, cilindrada, potencia, color);
        this.numeroPuertas = numeroPuertas;
        this.descapotable = descapotable;
    }
    getData() {
        return `Coche: ${this.getMarca()} ${this.getModelo()}, Matrícula: ${this.getMatricula()}, Color: ${this.getColor()}, Puertas: ${this.numeroPuertas}, Descapotable¿?: ${this.descapotable} `;
    }
}
exports.Coche = Coche;
/**
 * Clase Moto
 */
class Moto extends vehiculo {
    TipoDeManillar;
    TipoDeEscape;
    constructor(matricula, marca, modelo, cilindrada, potencia, color, TipoDeManillar, TipoDeEscape) {
        super(matricula, marca, modelo, cilindrada, potencia, color);
        this.TipoDeManillar = TipoDeManillar;
        this.TipoDeEscape = TipoDeEscape;
    }
    getData() {
        return `Moto: ${this.getMarca()} ${this.getModelo()}, Matrícula: ${this.getMatricula()}, Color: ${this.getColor()}, Tipo de manillar: ${this.TipoDeManillar}, Tipo de escape ${this.TipoDeEscape}`;
    }
}
exports.Moto = Moto;
