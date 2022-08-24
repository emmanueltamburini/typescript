
/*
    ===== Código de TypeScript =====
*/

function sumar(a: number, b: number): number {
    return (a + b);
}

const sumarFlecha = (a: number, b:number): number => {
    return a + b;
}

function multiplicar(numero: number, otroNumer?: number, base: number = 2): number {
    return numero * base;
}

const resultado = sumar(10, 20);

const resultado2 = multiplicar(5, 10);

const resultado3 = multiplicar(5, 0, 10);

console.log(resultado);