import { calculaISV, Producto } from "./06-desestruturacion-funcion";

/*
    ===== Código de TypeScript =====
*/

const carritosCompras: Producto[] = [
    {
        desc: 'Telefono 1',
        precio: 100
    },
    {
        desc: 'Telefono 2',
        precio: 150
    }
];


const [total, isv] = calculaISV( carritosCompras );

console.log('Total', total);
console.log('ISV', isv);