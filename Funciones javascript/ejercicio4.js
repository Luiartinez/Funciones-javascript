function convertirAMayusculas(array) {
    return array.map(function(cadena) {
      return cadena.toUpperCase();
    });
  }

  let palabras = ["hola", "estas son", "funciones en javascript"];
  let resultado = convertirAMayusculas(palabras);
  console.log(resultado);
  