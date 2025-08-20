let persona = {
  nombre: "Carlos",
  edad: 28,
  direccion: {
    ciudad: "Madrid",
    codigoPostal: 28001
  },
  hobbies: ["leer", "correr", "pintar"]
};


const mostrarNombre = () => persona.nombre;
const mostrarEdad = () => persona.edad; 
const mostrarCiudad = () => persona.direccion.ciudad;

const mostrarCodigoPostal = () => {
  return persona["direccion"]["codigoPostal"];
}

const mostrarHobbie = () => {
  return persona.hobbies[1];
}

console.log(mostrarNombre());
console.log(mostrarEdad());
console.log(mostrarCiudad()); 
console.log(mostrarCodigoPostal());
console.log(mostrarHobbie());


const universidad = {
  nombre: "Universidad Central",
  ubicacion: {
    ciudad: "Sevilla",
    direccion: {
      calle: "Av. Principal",
      numero: 123
    }
  },
  facultades: [
    {
      nombre: "Ingeniería",
      carreras: [
        {
          nombre: "Informática",
          estudiantes: [
            { nombre: "Laura", edad: 20, hobbies: ["programar", "ajedrez"] },
            { nombre: "Javier", edad: 22, hobbies: ["fútbol", "cine"] }
          ]
        },
        {
          nombre: "Civil",
          estudiantes: [
            { nombre: "Sofía", edad: 21, hobbies: ["fotografía", "leer"] }
          ]
        }
      ]
    },
    {
      nombre: "Derecho",
      carreras: [
        {
          nombre: "Derecho Penal",
          estudiantes: [
            { nombre: "Andrés", edad: 23, hobbies: ["debate", "natación"] }
          ]
        }
      ]
    }
  ]
};


const getNombreUniversidad = () => universidad.nombre;
const getCalleUniversidad = () => universidad.ubicacion.direccion.calle;

console.log(getNombreUniversidad());








