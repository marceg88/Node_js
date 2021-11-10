const faker = require ("faker");
const fs = require ("fs")
let name = 0
let names = []

//Generar 1000 nombres falsos
for (i=0; i<1000; i++) {
    name = faker.name.findName()
    names.push({ "name": name}) //Vector names
}

//crear carpeta y guardar los nombres
fs.writeFile('./names.txt', JSON.stringify(names, null, '/n'), error => {
    if (error)
      console.log(error);
    else
      console.log('El archivo fue creado con exito');
  });

console.log(names)


 