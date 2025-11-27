// optional chaining
const citaMedica = cita?.medica?.historial

//antes || nullish coalescing

const numeroHijos = inputUsuario || 2

//ahora 

const numerodehijos = inputUsuario ?? 'no especificado'

//con la primera opcion, si el usuario ingresa 0, js lo toma como falso y le asigna un dos, y con la segunda solo usa el valor por defecto si es estrictamente null o undefined, y respeta el cero

