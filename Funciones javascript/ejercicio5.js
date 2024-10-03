function esPrimo(numero) {
  if (numero <= 1) return false; // Los números menores o iguales a 1 no son primos
  if (numero === 2) return true; // El 2 es el único número primo par

  // Verificar si tiene algún divisor
  for (let i = 2; i <= numero / 2; i++) {
      if (numero % i === 0) {
          return false;
      }
  }

  return true;
}

// Ejemplo de uso:
console.log(esPrimo(7));  // Salida: true
console.log(esPrimo(10)); // Salida: false
