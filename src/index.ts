import { preguntar } from './lib/consola.ts';
import { cifrar, descifrar } from './lib/funcionesCriptográficas.ts';

let palabra: string = preguntar("Cual es la palabra?"); // Preguntar por la palabra a cifrar o descifrar
let claveTexto= Number(preguntar("Que clave?")); // Preguntar por la clave de cifrado (número)
let accion: string = preguntar ('desea cifrar o descifrar?'); // Preguntar si se desea cifrar o descifrar (cifrar/descifrar)

let resultado: string = ''; // COMPLETAR

if  (accion === "cifrar" || accion === "Cifrar"){
    resultado = cifrar (palabra, claveTexto)
}

else if  (accion === "descifrar" || accion === "Descifrar"){
    resultado = descifrar (palabra, claveTexto)
}

console.log(resultado);

