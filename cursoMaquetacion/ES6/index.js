
const superObject = {
    name: {
        first: 'jaime',
        second: 'Luis'
    },
    lastname: {
        first: 'de lizaola'
    }

}

console.log(Object.entries(superObject))
console.log(Object.keys(superObject))
console.log(Object.values(superObject))
const object = {
    name: 'jaime',
    age: 23,
    city: 'Ags'
}

console.log(Object.keys(object))
console.log(Object.values(object))
console.log(Object.entries(object))

const array = [1,2,3,4,5]

//en el ciclo for in, el primer dato es solo el indice
for (i in superObject) {
    console.log('resultado ciclo for in ' + superObject[i])
}

for (const [clave, valor] of Object.entries(object)) {
    console.log(clave, valor)
}


const datosCita = {
    paciente: "Jaime",
    doctor: "Dr. Gregory House",
    especialidad: "Diagnóstico",
    fecha: "28 Nov 2025",
    hora: "16:00",
    consultorio: "Sala 4B"
  };

console.log(Object.entries(datosCita))