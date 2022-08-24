
/*
    ===== Código de TypeScript =====
*/

let habilidades: (boolean | number | string)[] = ['Bash', 'Counter', 'Healing'];
// let habilidades: string[] = ['Bash', 'Counter', 'Healing', 1, true];

interface Personaje {
    nombre: string;
    hp: number;
    habilidades: string [],
    puebloNatal?: string;
}

const personaje: Personaje = {
    nombre: 'Strider',
    hp: 100,
    habilidades: ['Bash', 'Counter', 'Healing']
}

personaje.puebloNatal = 'Pueblo Natal';

console.table(personaje);