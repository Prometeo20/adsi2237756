//NO TIENE PARAMETROS

const x=()=>{
    return "Hola"
}

console.log(x());

// ó

const w=()=>"Hola";
console.log(x());

//TIENE SOLO UN PARAMETRO

const y=nombre=>`Hola ${nombre}`;
console.log(y("Pedro"))

//TIENE MAS DE UN PARAMETROS

const z=(nombre,apellido)=>`Hola ${nombre} ${apellido}`;
console.log(z("Pedro","Perez"))


