/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
   
   return array [0];
}

function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
   return array [array.length -1];
}

function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
   return array.length;
}

function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:
   for (let index = 0; index < array.length; index++) {
      array[index] = array [index] +1
     
  } return array; 
}

function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
array.push(elemento);
   return array;
} 
function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.unshift(elemento);
   return array;
}

function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:
   return palabras.join (" ");
}

function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar True si está, o False si no está.
    
   // Tu código:
   for (let index = 0; index < array.length; index++) {
      if (array[index] === elemento)
      {
      return true   }  
        
   }
   return false
}

function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:
   sumanumeros = 0;
   for (let index = 0; index < arrayOfNums.length; index++) {
      sumanumeros = sumanumeros + arrayOfNums[index];
     
   } return sumanumeros
}

function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:
   promedionotas = 0;
   for (let index = 0; index < resultadosTest.length; index++) {
      promedionotas = promedionotas + resultadosTest[index];
      
   } return promedionotas/resultadosTest.length
}

function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:
   masgrande = [0];
   for (let index = 1; index < arrayOfNums.length; index++) {
      if (arrayOfNums[index]> masgrande) {
masgrande = arrayOfNums [index];
         
      }
           
   } return masgrande
}

function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:
   if (arguments.length === 0)  return 0;
   if (arguments.length === 1)  return arguments[0];
      
   
   resultado = arguments[0];         
   for (let index = 1; index < arguments.length; index++) {
      resultado = resultado * arguments[index];
      
   }return resultado;
}

function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:
   mayor18 = [];
   for (let index = 0; index < array.length; index++) {
      if (array[index]> 18) {mayor18.push(array[index])
          }
      
      
   }return mayor18.length;
}

function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:
        
   
   if (numeroDeDia === 1 ||numeroDeDia ===7)   return "Es fin de semana";
  
      return "Es dia laboral";
   
      
}

function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar True si el entero inicia con 9 y False en otro caso.
   // Tu código:
   if (num.toString ()[0] === "9")  return true; 
   return false;
}

function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar True.
   // Caso contrario retornar False.
   // Tu código:
   resultado = array[0];
   for (let index = 0; index < array.length; index++) {
      if( resultado !== array[index]) return false;
      
   } return true;
}

function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:
   mesesSelecionados =[];
   for (let index = 0; index < array.length; index++) {
    if(  "Enero" === array[index] 
    ||"Marzo" === array[index]
     ||"Noviembre"=== array[index]) {
      mesesSelecionados.push(array[index]);
    }
      if (mesesSelecionados.length === 3) { 
         return mesesSelecionados;       
      } 
      
   } return "No se encontraron los meses pedidos";
   
}

function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:
   tabla = [];
   for (let index = 0; index <= 10; index++) {
     tabla.push(index *6);
      
   }
   return tabla;   
}

function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:
   mayor100 = [];
   for (let index = 0; index < array.length; index++) {
      if(array[index]> 100) mayor100.push(array[index])
      
   } return mayor100;
}

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la dd y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:
   var arr = [];
   for (var i = 0; i < 10; i++) {
     num += 2;
     arr.push(num);
     if (num === i) {
       return "Se interrumpió la ejecución";
       break;
     }
   }
   return arr;

}

function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se dd ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:
   var array = [];
  for (var i = 0; i < 10; i++) {
    if (i === 5) {
      continue;
    }
    num += 2;
    array.push(num);
  }
  return array;
      
   
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
