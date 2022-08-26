/*
    ===== Código de TypeScript =====
*/

class Heroe {
    alterEgo: string;
    edad: number;
    nombreReal: number;

    imprimirNombre() {
        return this.alterEgo + ' ' + this.nombreReal;
    }
}

const ironman = new Heroe();

console.log(ironman);