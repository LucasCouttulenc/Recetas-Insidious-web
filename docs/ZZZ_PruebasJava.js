

console.log("Booeenas", 48+2)
console.error("fiumban´t")
console.warn("cuidado paulo londra")
// console.clear("limpiar consola")
console.info("informacion")

/*
x = 5; // nombre: x, valor: 5, tipo de dato: número
y = "Hola"; // nombre: y, valor: Hola, tipo de dato: texto
Manu = "me"; // nombre: Manu, valor: me, tipo de dato: texto
var s = "Hola, me llamo Manu"; // s, de string
var n = 42; // n, de número
var b = true; // b, de booleano
var u; // u, de undefined



console.log(typeof s);
console.log(typeof n);
console.log(typeof b);
console.log(typeof u);

console.log(s);
console.log(n);
console.log(b);
console.log(u);



var a = 5 

function x(){
    var a = 10;
    console.log(a)
    console.log(window.a);
}

x();
*/


 


// function x() {
//     console.log(a); // En esta línea el valor de "a" es undefined
//     var a = 5; // Aquí creamos una variable "a" a nivel de función
//     console.log(a); // Aquí el valor de "a" es 5 (a nivel de función)
//     console.log(window.a); // Aquí el valor de "a" es 1 (ámbito global)
// }



/*
console.log(5 * null)
console.log(5 - 1)
console.log("5" + 1 + "Hola")




const Persona = {
nombre: "Juan",
edad: 35,
}
console.log(Persona)


console.log(Math.sqrt (25))


let x = Math.random();
x=x*100;     //número máximo (ahora 100)
x=Math.floor(x);   //número mínimo, (1 por default)

console.log(x)


a=5
console.log(++a); // ejecuta al "a+1"  // LE SUMA 1 Y LO IMPRIME        //se va a ejecutar "6"
console.log(a++); // ejecuta "a" y hace "a+1" // IMPRIME "a" Y DESPUÉS LE SUMA 1    //se va a ejecutar "6"
console.log(a);  //se va a ejecutar "7"
//TODO LO MISMO CON "a--"
*/


// Number.isFinite
// Number.isInteger
// Number.isNaN
// Number.isSafeInteger




/*
let edad= prompt("Ingrese su edad: ")
console.log("Edad: " + edad)
if (edad >= 18 && edad<=49){
    console.log("Sos un adulto")
}
else if (edad < 18) {
    console.log("Sos muy chikito")
}
else {
    console.log("Sos un viejardo")
}*/




/*

function tablaUno(){
    for(let i=0;i<=10;i++){
        console.log("1 x ", i,"=",1 * i);
    }
}
console.log("tabla del uno")
tablaUno();


function Suma(a,b){
    return a+b;
}

console.log(Suma());

*/



/*

function Persona(nombre, apellido, edad, genero, intereses){

    this.nombre=nombre;
    this.apellido=apellido;
    this.edad=edad;
    this.genero=genero;
    this.intereses=intereses;
}

let persona1 = new Persona("Lucas", "Couttu", 18, "Hombre", ["Música", "Simpsons"]);
console.log(persona1);

let persona2 = new Persona("Tomás", "Fiol", 19, "Hombre", ["Anime", "MCU"]);
console.log(persona2);

*/




// !!!!!!!!!!!!!   ARRAYS    !!!!!!!!!!!!

let Frutas=["Manzana", "Banana", "Naranja", "Cereza", "Sandía"];
console.log(Frutas);
Frutas.push("Mandarina"); // Le agrega a la lista eso
console.log(Frutas);

for(let i=0; i < Frutas.length; i++){  // imprimir cada item de la lista
    console.log(Frutas[i]);
}

Frutas.forEach((e) => console.log(e)); // imprimir cada item de la lista

/*

let Frutas2=["Pera", "Frutilla"];
console.log(Frutas2[1]); //muestra la posision 1 (Frutilla)
console.log(Frutas2.length) // muestra la cantidad de elementos de Frutas2






let Letras=["B", "A", "C", "F"];
Letras.reverse(); // invierte el orden de la lista
Letras.sort(); // ordena la lista alfabeticamente


*/





// !!!!!!!!!!!!!!!!!              FILTROS             !!!!!!!!!!!!!!!!!

const arr = ["Marcos", "Ana", "Juan Carlos", "Marcelo", "Mariana"];

const nuevoArr = arr.filter((e) => e[0] == "M"); // te hace un array con los elementos que empiecen con M
console.log(nuevoArr);



const Array = ["Marcos", "Ana", "Juan Carlos", "Zoe", "Marcelo", "Mariana", "Luz"];

const nuevoArray = Array.find((e) => e.length == 3); // te hace uno con los elementos que tienen 3 letras 
const nuevoArray2 = Array.findIndex((e) => e.length == 3); // lo mismo pero te da lista de las posiciones

console.log(nuevoArray);
console.log(nuevoArray2);









































