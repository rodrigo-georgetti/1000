//
// 6️⃣ ***** EJERCICIO 6 ***** - sortPrimeHouses() 6️⃣
// 
// Implementar un algoritmo de ordenamiento, que además de ordenar un array de menor a mayor,
// retorne false si un número dentro del array no es primo
// EJEMPLOS:
// Dado el siguiente array:
// [25, 3, 6, 8, 5, 12, 9, 18, 11, 7]
// sortPrimeHouses() retorna => false (porque 25 por ejemplo, no es primo)
//
// Dado este otro array:
// [61, 7, 13, 11, 29, 3]
// sortPrimeHouses() retorna => [3, 7, 11, 13, 29, 61]
//⚠️ ATENCION ⚠️
// NO utilizar el método sort() de Array!
// REQUISITOS:
//  🟢 Aplicar un algoritmo de ordenamiento de menor a mayor
//  🟢 Si numuero dentro del array no es primo, retornar false

function sortPrimeHouses(array) {
  for (let k = 0; k < array.length; k++){
    for (let l = 2; l < array[k]-1; l++){
      if (array[k] % l === 0) {
        return false;
      }
    }
  }
  var auxiliar = 0;
  for (let i = 0; i < array.length; i++){
    for (let j = 0; j < array.length - 1 - i; j++){
      if (array[j + 1] < array[j]){
        auxiliar = array[j];
        array[j] = array[j + 1];
        array[j + 1] = auxiliar;
      }
    }
  }
 return array;
}

// ⚠️ NO MODIFICAR NADA POR DEBAJO DE ESTA LÍNEA ⚠️
module.exports = {
  sortPrimeHouses
};