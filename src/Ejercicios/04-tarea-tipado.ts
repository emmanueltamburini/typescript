
/*
    ===== Código de TypeScript =====
*/

interface Direccion {
    calle: string,
    pais: string,
    ciudad: string,
}

interface SuperHeroe {
    nombre: string,
    edad: number,
    direccion: {
        calle: string,
        pais: string,
        ciudad: string,
    },
    mostrarDireccion: () => void,
}

interface SuperHeroe {
    nombre: string,
    edad: number,
    direccion: Direccion,
    mostrarDireccion: () => void,
}

const superHeroe: SuperHeroe = {
    nombre: 'Spiderman',
    edad: 30,
    direccion: {
        calle: 'Main St',
        pais: 'USA',
        ciudad: 'NY'
    },
    mostrarDireccion() {
        return this.nombre + ', ' + this.direccion.ciudad + ', ' + this.direccion.pais;
    }
}


const direccion = superHeroe.mostrarDireccion();
console.log(direccion);