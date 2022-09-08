/*
1.Solicitar por medio de varios prompt el nombre, el apellido y la edad de una persona.
Y devolverlo por consola de la siguiente forma:
Ej: Ingresa como nombre Maria como apellido Perez y como edad 30, tiene que devolver por
consola: “Se llama: Maria se apellida:Perez y tiene 30 años”
*/
let nombre = "Maria";
let apellido = "Perez";
let edad = 30;
//opcion 1, concatenando variables
console.log(
  "Se llama: " +
    nombre +
    " se apellida: " +
    apellido +
    " y tiene " +
    edad +
    " años."
);
//opcion 2, mediante interpolacion de variables
let seLlama = `Se llama: ${nombre} se apellida: ${apellido} y tiene ${edad} años.`;
console.log(seLlama);
/*
2. Dado una edad , usar un condicional para indicar por consola si esa persona es mayor de 18
años o no.
*/
if (edad > 18) {
  console.log("Es mayor de 18 años");
} else {
  console.log("Es menor de 18 años");
}
/*
3.Crear una variable usuario, contraseña y administador(esta ultima que sea un
booleano).Verificar con if/else si son correctos a los registrados, en caso que sean correctos
verificar si es administrador o no, en caso que sea administrador devolver por consola “tiene
acceso a todos campos” sino devolver por consola “tiene acceso limitado”.
*/
let usuario = "Maria";
let contraseña = "1234";
let administador = true;
if (usuario === "Maria" && contraseña === "1234") {
  console.log("Los datos son correctos");
} else {
  console.log("Los datos son incorrectos");
}
if (administador === true) {
  console.log("tiene acceso a todos los campos");
} else {
  console.log("tiene acceso limitado");
}
/*
4.Dado una lista de números, usando el bucle for sumarlos a todos y devolver el resultado por
consola.
*/
let numeros = [1, 2, 3, 4, 5];
let suma = 0;
for (let i = 0; i < numeros.length; i++) {
  console.log(numeros[i]);
  suma = suma + numeros[i];
}
console.log(`La suma total es`, suma);

/*
5. Dado un array de nombres , usando while devolver por consola un saludo a esa persona. Ej:
“Hola Juana” “Hola Jose”
*/
const nombres = ["Juana", "Jose"];

do {
  console.log("Hola " + nombres[0]);
  console.log("Hola " + nombres[1]);
} while (nombres < 10);

/*
6. Dado un array de números indicar por consola cual es par y cual es impar
*/
let arrayN = [1, 2, 3, 4, 5];
let pares = [];
let impares = [];
for (let i = 0; i < arrayN.length; i++) {
  if (i % 2 == 0) {
    impares.push(arrayN[i]);
  } else {
    pares.push(arrayN[i]);
  }
}
console.log("Los numeros pares son " + pares);
console.log("Los numeros impares son " + impares);
/*
7. Dado un array de países, armar una variable con otro país .Ver si se encuentra en la lista con
un bucle y si esta, devolver por consola “ese país ya se encuentra registrado” y sacarlo de la
lista, en caso contrario devolver “ Pais registrado” y agregarlo a la lista.
*/
// let paises = ["Argentina","Uruguay","Chile","Brasil"];
// let pais = "Peru";
// for (i of paises) {
// 	if (i===pais){
// 		console.log("esta Peru en la lista?");
// 		//paises.push("Peru");
// 	} else {
// 		console.log("No esta en la lista")
// 	}
// };
//console.log(paises);

let misGatos = ["indio", "sami", "indiana"];
console.log(misGatos[1]);
//devuelve la posicion 1 = "sami"

// El copado de Harry Potter ("FizzBuzz"	)
//Usar bucle FOR
// cómo saber si algo es múltiplo de otra cosa
// Mostrar en pantalla (en consola) los números del 1 al 100
// Reemplazar los números múltiples de 2 por la palabra "Harry"
// Reemplazar los números múltiples de 3 por la palabra "Potter"
// Si es múltiplo de 2 y de 3 también... poner "Voldemort"
/*1
Harry
Potter
Harry
5
Voldemort
7
Harry
Potter
*/

for (let i = 1; i <= 100; i++) {
  //primero mostramos del 1 al 100
  //console.log(i);
  //luego preguntamos si el resultado es multiplo de 2 y 3; y que en los resultados positivos reemplace por Voldemort. Este va primero porque cumple con las dos condiciones abajo enviadas y es excluyente
  if (i % 2 === 0 && i % 3 === 0) console.log("voldemort");
  //luego preguntamos si el resultado es multiple de 2 y que los resultados positivos reemplace por harry
  else if (i % 2 === 0) {
    console.log("harry");
    //luego preguntamos si el resultado es multiple de 3 y que los resultados positivos reemplace por potter
  } else if (i % 3 === 0) {
    console.log("potter");
    //finalmente mostramos por consola el resultado
  } else {
    console.log(i);
  }
}

//comentar el console.clear para leer los resultados de arriba.
console.clear();
//Ejercicios de Programación en JavaScript - Jon Mircha
console.log("Ejercicios de Lógica de Programación ( 1 / 10 )");

/* 1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFunción("Hola Mundo") devolverá 10 

SOLUCION JON MIRCHA:
function contarCaracteres(cadena = ""){
  if (!cadena){
    console.warn("No ingresaste ninguna cadena");
  } else{
    console.info(`La cadena ${cadena} tiene ${cadena.length} caracteres`);
  }
}
contarCaracteres();
contarCaracteres("Hola Mundo");
*/

/*SOLUCION IF/ELSE JON MIRCHA CON ARROW FUNCTION EN UNA SOLA LINEA:
const contarCaracteres=(cadena= "")=>(!cadena)? console.warn("No ingresaste ninguna cadena"):console.info(`La cadena ${cadena} tiene ${cadena.length} caracteres`);

contarCaracteres();
contarCaracteres("Hola Mundo");
*/

let miFuncion = "Hola Mundo. ";
function contar() {
  console.log(miFuncion);
  console.log("Ej.1:", miFuncion.length);
}
contar();

/* 2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFunción("Hola Mundo", 4) devolverá "Hola" */

/*SOLUCION JON MIRCHA CON ARROW FUNCTION Y VARIOS OPERADORES TERNARIOS:

const recortarTexto= (cadena= "", longitud = undefined)=>
(!cadena)
  ?console.warn("No ingresaste una cadena de texto")
  :(longitud===undefined)
    ?console.warn("No ingresaste la longitud para recortar el texto")
    :console.info(cadena.slice(0,longitud))

recortarTexto("Hola Mundo",4);
recortarTexto();
recortarTexto("Hola Hola");
recortarTexto("",5);
*/

function cortar() {
  console.log("Ej.2:", miFuncion.slice(0, 4));
}
cortar();

/* 3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe.
 miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'] */
/*SOLUCION JON MIRCHA CON ARROW FUNCTION Y VARIOS OPERADORES TERNARIOS:

const cadenaAArreglo = (cadena= "", separador=undefined)=>(!cadena)?console.warn("No ingresaste una cadena de texto"):(separador===undefined)?console.warn("No ingresaste el caracter separador"):console.info(cadena.split(separador))

cadenaAArreglo("Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem fuga cupiditate dolores saepe, praesentium sit eaque recusandae id sapiente similique, laudantium voluptatum perferendis ea iure ad odio doloremque earum voluptate.", " ");
cadenaAArreglo("Ene,Feb,Mar,Abr,May,Jun,Jul,Ago,Sep,Oct,Nov,Dic", ",");
cadenaAArreglo();
cadenaAArreglo("Hola Mundo");
cadenaAArreglo("", "-");

*/

function texto() {
  let miFuncion2 = "Hola que tal como estas";
  console.log("Ej.3:", miFuncion2.split(" "));
}
texto();

/* 4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá HolMundo Hola Mundo Hola Mundo */
/*SOLUCION JON MIRCHA
const repetirTexto =(texto = "", veces = undefined) =>{
  if(!texto)return console.warn("No ingresaste un texto");
  if(veces=== undefined)return console.warn("No ingresaste el numero de veces a repetir el texto");
  if(veces=== 0)return console.error("El numero de veces no puede ser 0");
  if(Math.sign(veces)===-1)return console.error("El numero de veces no puede ser negativo");
  for(let i=1; i <= veces; i++)console.info(`${texto},${i}`);
}
repetirTexto("Hola Mundo",3);
repetirTexto("Hola Mundo",0);
repetirTexto("Hola Mundo",-20);
repetirTexto("",20);
repetirTexto("Hola Mundo");
*/

function repetir() {
  console.log("Ej.4:", miFuncion.repeat(3));
}
repetir();

/* RESUMEN VIDEO 35. Ejercicios de Lógica de Programación ( 1 / 10 )
Aquí unos consejos y recomendaciones de las buenas prácticas de Jon que noté en este video:
1.- Usar funciones expresadas con operadores ternarios para el retorno implícito - (Deja tu código simple, limpio y expresivo)
2.- Usar operadores ternarios concatenados e identados en lugar de if cuando este último no sea necesario - (Al igual que el anterior es más fácil de leer y mantener)
3.- Hacer las validaciones necesarias al comienzo de una función y al último solucionar el problema - (Deja la solución para el final y resuelve los posibles problemas primero con las validaciones)
4.- Definir valores por defecto en los parámetros de una función - (Mantén el control de los parámetros y anticipate a posibles valores vacíos)
5.- Usar el 'return' en condicionales if y alinear en código cuando sea de una sola línea - (evitar las llaves si el código de la condición tiene una sola línea)
6.- Si tu condición if ya tiene un return es redundante añadir un else. Evita anidar varios else if en una condición - (Hazlo simple y mantén el nivel sin utilizar tantos anidamientos en condiciones innecesarias)
*/

//comentar el console.clear para leer los resultados de arriba.
console.clear();
console.log("Ejercicios de Lógica de Programación ( 2 / 10 )");

/* 5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo")devolverá "odnuM aloH" */

const invertirCadena = (cadena = "") =>
  !cadena
    ? console.warn("No ingresaste una cadena de texto")
    : console.info(cadena.split("").reverse().join(""));

invertirCadena();
invertirCadena("Hola Mundo");

/* 6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2 */

const textoEnCadena = (cadena = "", texto = "") => {
  if (!cadena) return console.warn("No ingresaste el texto largo");
  if (!texto) return console.warn("No ingresaste la palabra a evaluar");

  let i = 0,
    contador = 0;
  while (i !== -1) {
    i = cadena.indexOf(texto, i);
    if (i !== -1) {
      i++, contador++;
    }
  }
  return console.info(`La palabra ${texto} se repite ${contador} veces`);
};

textoEnCadena();
textoEnCadena("", "Mundo");
textoEnCadena("hola mundo adios mundo");
textoEnCadena("hola mundo adios mundo", "mundo");

/* 7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true */

//MI SOLUCION (QUE COMENTO PARA EVITAR EL PROMPT)
/*
function verSiEsPalindromo(miFuncionPal) {
    const revertirMiFuncionPal = miFuncionPal.split('').reverse().join('');
    if(miFuncionPal == revertirMiFuncionPal) {
        console.info("La palabra introducida es palindromo");
    }
    else {
        console.warn("La palabra introducida no es palindromo");
    }
}

const ingresaTexto = prompt('Enter a string: ');
verSiEsPalindromo(ingresaTexto);
*/

//SOLUCION JON MIRCHA
const palindromo = (palabra = "") => {
  if (!palabra) return console.warn("No ingresaste una palabra o frase");
  palabra = palabra.toLowerCase();
  let alReves = palabra.split("").reverse("").join("");
  return palabra === alReves
    ? console.info(
        `Sí es palindromo, Palabra original ${palabra}, palabra al reves ${alReves}`
      )
    : console.warn(
        `No es palindromo, Palabra original ${palabra}, palabra al reves ${alReves}`
      );
};

palindromo();
palindromo("Hola Mundo");
palindromo("salas");

/* 8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5 */

const eliminarCaracteres = (texto = "", patron = "") =>
  !texto
    ? console.warn("No ingresaste un texto")
    : !patron
    ? console.warn("No ingresaste un patron de caracteres")
    : console.info(texto.replace(new RegExp(patron, "ig"), ""));

eliminarCaracteres();
eliminarCaracteres("xyz1, xyz2, xyz3, xyz4 y xyz5");
eliminarCaracteres("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz");
eliminarCaracteres(
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure excepturi enim ex reprehenderit, sapiente debitis optio, totam reiciendis modi dolorem hic aliquam maiores et nobis magnam blanditiis! Saepe, eaque dolorem!",
  "o"
);

//comentar el console.clear para leer los resultados de arriba.
console.clear();
console.log("Ejercicios de Lógica de Programación ( 3 / 10 )");

/* 9) Programa una función que obtenga un numero aleatorio entre 501 y 600 */

//SOLUCION JON MIRCHA
/*
    const aleatorio = ()=>console.info(Math.round(Math.random()*100)+500);
    aleatorio();
    */

function aleatorio(min, max) {
  console.info(Math.round(Math.random() * (501 - 600) + 600));
}
aleatorio();

/* 10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true  */

//SOLUCION JON MIRCHA
const capicua = (numero = 0) => {
  if (!numero) return console.warn("No ingresaste un numero");
  if (typeof numero !== "number")
    return console.error(`El valor "${numero}" ingresado, NO es un numero`);
  numero = numero.toString();
  let alReves = numero.split("").reverse().join("");
  return numero === alReves
    ? console.info(
        `Si es capicua, Numero original ${numero}, Numero al reves ${alReves}`
      )
    : console.info(
        `No es capicua, Numero original ${numero}, Numero al reves ${alReves}`
      );
};

capicua();
capicua("19");
capicua({});
capicua(2000);
capicua(18.99);
capicua(212.212);

/*
    const capicua = (numero)=>{
      numero=numero.toString()
      return numero.split("").reverse().join("") === numero
    }
    console.info(capicua(2005));
    */

/* 11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120 */
const factorial = (numero = undefined) => {
  if (numero === undefined) return console.warn("No ingresaste un numero");
  if (typeof numero !== "number")
    return console.error(`El valor "${numero}" ingresado, NO es un numero`);
  if (numero === 0) return console.error("El numero no puede ser 0");
  if (Math.sign(numero) === -1)
    return console.error("El numero no puede ser negativo");
  let factorial = 1;
  for (let i = numero; i > 1; i--) {
    factorial *= i;
  }
  return console.info(`El factorial de ${numero} es ${factorial}`);
};

factorial();
factorial("5");
factorial([1, 2, 3]);
factorial(0);
factorial(-5);
factorial(5);
factorial(8);

//comentar el console.clear para leer los resultados de arriba.
console.clear();
console.log("Ejercicios de Lógica de Programación ( 4 / 10 )");

/* 12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true */
const numeroPrimo = (numero = undefined) => {
  if (numero === undefined) return console.warn("No ingresaste un numero");
  if (typeof numero !== "number")
    return console.error(`El valor "${numero}" ingresado, NO es un numero`);
  if (numero === 0) return console.error("El numero no puede ser 0");
  if (Math.sign(numero) === -1)
    return console.error("El numero no puede ser negativo");

  let divisible = false;

  for (let i = 2; i < numero; i++) {
    if (numero % i === 0) {
      divisible = true;
      break;
    }
  }

  return divisible
    ? console.warn(`El numero ${numero}, NO es primo`)
    : console.info(`El numero ${numero}, SI es primo`);
};

numeroPrimo();
numeroPrimo("320");
numeroPrimo(true);
numeroPrimo(0);
numeroPrimo(1);
numeroPrimo(-13);
numeroPrimo(13);
numeroPrimo(200);

/* 13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar */
const numeroParImpar = (numero = undefined) => {
  if (numero === undefined) return console.warn("No ingresaste un numero");
  if (typeof numero !== "number")
    return console.error(`El valor "${numero}" ingresado, NO es un numero`);
  return numero % 2 === 0
    ? console.info(`El numero ${numero}, es Par`)
    : console.info(`El numero ${numero}, es Impar`);
};

numeroParImpar();
numeroParImpar("23");
numeroParImpar(-398);
numeroParImpar(19);

/* 14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F */
const convertirGrados = (grados = undefined, unidad = undefined) => {
  if (grados === undefined)
    return console.warn("No ingresaste grados a convertir");
  if (typeof grados !== "number")
    return console.error(`El valor ${grados} ingresado, NO es un numero`);
  if (unidad === undefined)
    return console.warn("No ingresaste el tipo de grados grado a convertir");
  if (typeof unidad !== "string")
    return console.error(
      `El valor ${unidad} ingresado, NO es una cadena de texto`
    );
  if (unidad.length !== 1 || !/(C|F)/.test(unidad))
    return console.warn("Valor de unidad no reconocido");
  if (unidad === "C") {
    return console.info(`${grados}°C = ${Math.round((grados * 9) / 5 + 32)}°F`);
  } else if (unidad === "F") {
    return console.info(
      `${grados}°F = ${Math.round((grados - 32) * (5 / 9))}°C`
    );
  } else console.error("El tipo de grados a convertir NO es valido");
  console.info("¡FUNCIONA!");
};

convertirGrados();
convertirGrados("2");
convertirGrados(2);
convertirGrados(2, true);
convertirGrados(2, "hola");
convertirGrados(2, "E");
convertirGrados(0, "C");
convertirGrados(100, "C");
convertirGrados(32, "F");
convertirGrados(100, "F");

//comentar el console.clear para leer los resultados de arriba.
console.clear();
console.log("Ejercicios de Lógica de Programación ( 5 / 10 )");

/* 15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10 */
const convertirBinarioDecimal = (numero = undefined, base = undefined) => {
  if (numero === undefined)
    return console.warn("No ingresaste el numero a convertir");
  if (typeof numero !== "number")
    return console.error(`El valor "${numero}" ingresado, NO es un numero`);
  if (base === undefined)
    return console.warn("No ingresaste la base a convertir");
  if (typeof base !== "number")
    return console.error(`El valor ${base} ingresado, NO es un numero`);
  if (base === 2) {
    return console.info(
      `${numero} base ${base} = ${parseInt(numero, base)} base 10`
    );
  } else if (base === 10) {
    return console.info(
      `${numero} base ${base} = ${numero.toString(base)} base 2`
    );
  } else {
    return console.error("El tipo de base a convertir NO es valido");
  }
};

convertirBinarioDecimal();
convertirBinarioDecimal("2");
convertirBinarioDecimal(100);
convertirBinarioDecimal(100, "2");
convertirBinarioDecimal(100, 2);
convertirBinarioDecimal(1110010, 2);
convertirBinarioDecimal(4, 10);
convertirBinarioDecimal(114, 10);
convertirBinarioDecimal(114, 3);

/* 16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800 */
const aplicarDescuento = (monto = undefined, descuento = 0) => {
  if (monto === undefined) return console.warn("No ingresaste el monto");
  if (typeof monto !== "number")
    return console.error(`El valor "${monto}" ingresado, NO es un numero`);
  if (monto === 0) return console.error("El monto no puede ser 0");
  if (Math.sign(monto) === -1)
    return console.error("El monto no puede ser negativo");
  if (typeof descuento !== "number")
    return console.error(`El valor "${descuento}" ingresado, NO es un numero`);
  if (Math.sign(descuento) === -1)
    return console.error("El descuento no puede ser negativo");
  return console.info(
    `$${monto}-${descuento}% = $${monto - (monto * descuento) / 100} `
  );
};

aplicarDescuento();
aplicarDescuento("200");
aplicarDescuento(0);
aplicarDescuento(-1000);
aplicarDescuento(1000, "20");
aplicarDescuento(1000, -20);
aplicarDescuento(1000); //si no indico ningun descuento se aplica cero 0
aplicarDescuento(1000, 25);

/* 17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020) */
const calcularAnios = (fecha = undefined) => {
  if (fecha === undefined) return console.warn("No ingresaste la fecha");
  if (!(fecha instanceof Date))
    return console.error("El valor ingresado no es una fecha valida");
  let hoyMenosFecha = new Date().getTime() - fecha.getTime(),
    aniosEnMS = 1000 * 60 * 60 * 24 * 360;
  aniosHumanos = Math.floor(hoyMenosFecha / aniosEnMS);
  return Math.sign(aniosHumanos) === -1
    ? console.info(
        `Faltan ${Math.abs(aniosHumanos)} años para el ${fecha.getFullYear()}`
      )
    : Math.sign(aniosHumanos) === 1
    ? console.info(
        `Han pasado ${aniosHumanos} años, desde ${fecha.getFullYear()}.`
      )
    : console.info(`Estamos en el año actual ${fecha.getFullYear()}.`);
};

calcularAnios();
calcularAnios({});
calcularAnios(false);
calcularAnios(new Date());
calcularAnios(new Date(1984, 4, 23));
calcularAnios(new Date(1884, 4, 23));
calcularAnios(new Date(2084, 4, 23));

//comentar el console.clear para leer los resultados de arriba.
console.clear();
console.log("Ejercicios de Lógica de Programación ( 6 / 10 )");

/* 18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5 */
const contarLetras = (cadena = "") => {
  if (!cadena) return console.warn("No ingresaste una cadena de texto");
  if (typeof cadena !== "string")
    return console.error(
      `El valor "${cadena}" ingresado, NO es una cadena de texto`
    );
  let vocales = 0,
    consonantes = 0;
  cadena = cadena.toLocaleLowerCase();
  for (let letra of cadena) {
    if (/[aeiouáéíóúü]/.test(letra)) vocales++;
    if (/[bcdfghjklmnñpqrstvwxyz]/.test(letra)) consonantes++;
  }
  return console.info({ cadena, vocales, consonantes });
};
contarLetras();
contarLetras(3);
contarLetras("Hola Mundo");
contarLetras("Ñoño");
contarLetras(
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure excepturi enim ex reprehenderit, sapiente debitis optio, totam reiciendis modi dolorem hic aliquam maiores et nobis magnam blanditiis! Saepe, eaque dolorem!"
);

/* 19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero */
const validarNombre = (nombre = "") => {
  if (!nombre) return console.warn("No ingresaste un nombre");
  if (typeof nombre !== "string")
    return console.error(
      `El valor "${nombre}" ingresado, NO es una cadena de texto`
    );
  let expReg = /^[A-Za-zÑñÁÉÍÓÚáéíóúÜü\s]+$/g.test(nombre);
  return expReg
    ? console.info(`"${nombre}", es un nombre valido`)
    : console.warn(`"${nombre}", NO es un nombre valido`);
};
validarNombre();
validarNombre(3);
validarNombre("Jonathan MirCha");
validarNombre("Jonathan MirCha, 35");

/* 20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero */
const validarEmail = (email = "") => {
  if (!email) return console.warn("No ingresaste un email");
  if (typeof email !== "string")
    return console.error(
      `El valor "${email}" ingresado, NO es una cadena de texto`
    );
  //let expReg= /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test(email);
  //esta es mejor
  let expReg = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/i.test(email);
  return expReg
    ? console.info(`"${email}", es un email valido`)
    : console.warn(`"${email}", NO es un email valido`);
};
validarEmail();
validarEmail(34);
validarEmail("jon,mir,cha@gmail.com");
validarEmail("jonmircha@gmail.com");

/*Fusion 19 y 20*/
const validarPatron = (cadena = "", patron = undefined) => {
  if (!cadena)
    return console.warn("No ingresaste una cadena de texto a evaluar");
  if (typeof cadena !== "string")
    return console.error(
      `El valor "${cadena}" ingresado, NO es una cadena de texto`
    );
  if (patron === undefined)
    return console.warn("No ingresaste un patron a evaluar");
  if (!(patron instanceof RegExp))
    return console.error(
      `El valor "${patron}" ingresado, NO es una expresion regular`
    );

  let expReg = patron.test(cadena);
  return expReg
    ? console.info(`"${cadena}", cumple con el patron ingresado`)
    : console.warn(`"${cadena}", NO cumple con el patron ingresado`);
};
validarPatron();
validarPatron({});
validarPatron("Hola mundo");
validarPatron("Hola mundo", "hola");
validarPatron("Hola mundo", [1, 2, 3]);
validarPatron("Jonathan MirCha", /^[A-Za-zÑñÁÉÍÓÚáéíóúÜü\s]+$/g);
validarPatron("Jonathan MirCha 19", /^[A-Za-zÑñÁÉÍÓÚáéíóúÜü\s]+$/g);
validarPatron(
  "jonmircha@gmail",
  new RegExp(/^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/i)
);
validarPatron(
  "jonmircha@gmail.com",
  new RegExp(/^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/i)
);

//comentar el console.clear para leer los resultados de arriba.
console.clear();
console.log("Ejercicios de Lógica de Programación ( 7 / 10 )");

/* 21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25] */
const devolverCuadrados = (arr = undefined) => {
  if (arr === undefined)
    return console.warn("No ingresaste un arreglo de numeros");
  if (!(arr instanceof Array))
    return console.error("El valor que ingresaste no es un arreglo");
  if (arr.length === 0) return console.error("El arreglo esta vacio");
  for (let num of arr) {
    if (typeof num !== "number")
      return console.error(`El valor "${num}" ingresado, NO es un numero`);
  }
  const newArr = arr.map((el) => el * el);
  return console.info(
    `Arreglo original: ${arr}\nArreglo elevado al cuadrado: ${newArr}`
  );
};

devolverCuadrados();
devolverCuadrados(true);
devolverCuadrados({});
devolverCuadrados([]);
devolverCuadrados([1, "3", 4, {}]);
devolverCuadrados([1, 4, {}]);
devolverCuadrados([1, 4, 8]);

/* 22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60] */
const arrayMinMax = (arr = undefined) => {
  if (arr === undefined)
    return console.warn("No ingresaste un arreglo de numeros");
  if (!(arr instanceof Array))
    return console.error("El valor que ingresaste no es un arreglo");
  if (arr.length === 0) return console.error("El arreglo esta vacio");
  for (let num of arr) {
    if (typeof num !== "number")
      return console.error(`El valor "${num}" ingresado, NO es un numero`);
  }
  return console.info(
    `Arreglo original: ${arr}\nValor mayor: ${Math.max(
      ...arr
    )},\nValor menor:${Math.min(...arr)}`
  );
};

arrayMinMax();
arrayMinMax(false);
arrayMinMax([]);
arrayMinMax([2, 3, true]);
arrayMinMax([1, 4, 5, 99, -60]);

/* 23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]} */

const separarParesImpares = (arr = undefined) => {
  if (arr === undefined)
    return console.warn("No ingresaste un arreglo de numeros");
  if (!(arr instanceof Array))
    return console.error("El valor que ingresaste no es un arreglo");
  if (arr.length === 0) return console.error("El arreglo esta vacio");
  for (let num of arr) {
    if (typeof num !== "number")
      return console.error(`El valor "${num}" ingresado, NO es un numero`);
  }
  return console.info({
    pares: arr.filter((num) => num % 2 === 0),
    impares: arr.filter((num) => num % 2 === 1),
  });
};

separarParesImpares();
separarParesImpares("Hola");
separarParesImpares([]);
separarParesImpares([2, 4, "J"]);
separarParesImpares([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);

//comentar el console.clear para leer los resultados de arriba.
console.clear();
console.log("Ejercicios de Lógica de Programación ( 8 / 10 )");

/* 24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }*/
const ordenarArreglo = (arr = undefined) => {
  if (arr === undefined)
    return console.warn("No ingresaste un arreglo de numeros");
  if (!(arr instanceof Array))
    return console.error("El valor que ingresaste no es un arreglo");
  if (arr.length === 0) return console.error("El arreglo esta vacio");
  for (let num of arr) {
    if (typeof num !== "number")
      return console.error(`El valor "${num}" ingresado, NO es un numero`);
  }
  return console.info({
    arr,
    asc: arr.map((el) => el).sort(),
    desc: arr
      .map((el) => el)
      .sort()
      .reverse(),
  });
};

ordenarArreglo();
ordenarArreglo("Hola");
ordenarArreglo([]);
ordenarArreglo([3, {}]);
ordenarArreglo([7, 5, 7, 8, 6]);

/*
    const descendenteAscendente = (array) => {
    const ascendente = [...array].sort(( a, b) => a - b);
    const ascendente = [...array].sort(( a, b) => b - a);
}  */

/* 25) Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true]  */
const quitarDuplicados = (arr = undefined) => {
  if (arr === undefined)
    return console.warn("No ingresaste un arreglo de numeros");
  if (!(arr instanceof Array))
    return console.error("El valor que ingresaste no es un arreglo");
  if (arr.length === 0) return console.error("El arreglo esta vacio");
  if (arr.length === 1)
    return console.error("El arreglo debe tener al menos 2 elementos");
  /*
      return console.info({
        original: arr,
        sinDuplicados: arr.filter((value,index,self)=>self.indexOf(value)=== index)
      })
      */
  //Ahora la version nueva, con Set
  return console.info({
    original: arr,
    sinDuplicados: [...new Set(arr)],
  });
};
quitarDuplicados();
quitarDuplicados({});
quitarDuplicados([]);
quitarDuplicados([2]);
quitarDuplicados(["x", 10, "x", 2, "10", 10, true, true]);

/* 26) Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5 */
const promedio = (arr = undefined) => {
  if (arr === undefined)
    return console.warn("No ingresaste un arreglo de numeros");
  if (!(arr instanceof Array))
    return console.error("El valor que ingresaste no es un arreglo");
  if (arr.length === 0) return console.error("El arreglo esta vacio");
  for (let num of arr) {
    if (typeof num !== "number")
      return console.error(`El valor "${num}" ingresado, NO es un numero`);
  }
  return console.info(
    arr.reduce((total, num, index, arr) => {
      total += num;
      if (index === arr.length - 1) {
        return `El promedio de ${arr.join(" + ")} es ${total / arr.length}`;
      } else {
        return total;
      }
    })
  );
};
promedio();
promedio({});
promedio([]);
promedio([2, true]);
promedio([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);

//comentar el console.clear para leer los resultados de arriba.
console.clear();
console.log("Ejercicios de Lógica de Programación ( 9 / 10 )");

/* 27) Programa una clase llamada Pelicula.
        La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.
          - Todos los datos del objeto son obligatorios.
          - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 7 restantes números.
          - Valida que el título no rebase los 100 caracteres.
          - Valida que el director no rebase los 50 caracteres.
          - Valida que el año de estreno sea un número entero de 4 dígitos.
          - Valida que el país o paises sea introducidos en forma de arreglo.
          - Valida que los géneros sean introducidos en forma de arreglo.
          - Valida que los géneros introducidos esten dentro de los géneros aceptados*.
          - Crea un método estático que devuelva los géneros aceptados*.
          - Valida que la calificación sea un número entre 0 y 10 pudiendo ser decimal de una posición.
          - Crea un método que devuelva toda la ficha técnica de la película.
          - Apartir de un arreglo con la información de 3 películas genera 3 instancias de la clase de forma automatizada e imprime la ficha técnica de cada película.

        * Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western.
        */

class Pelicula{
  constructor({id, titulo, director, estreno, pais, generos, calificacion}){
    this.id = id;
    this.titulo = titulo;
    this.director = director;
    this.estreno = estreno;
    this.pais = pais;
    this.generos = generos;
    this.calificacion = calificacion;

    this.validarIMDB(id);
  }
  validarCadena(propidad,valor){
    if(!valor) return console.warn(`${propidad} "${valor}" esta vacio`);
    if(typeof valor !== "string") return console.error(`${propidad} "${valor}" ingresado, NO es una cadena de texto`);
  }
  validarIMDB(id){

  }
}
