// Crear una función obtenerIndice que tome como argumento un valor cualquiera valor y un array cualquiera array y devuelva el índice del primer ítem con dicho valor en el array, o -1 si no hay ninguno.

let $ = selector => document.querySelector(selector)
let showExerciseOne = $('.containerExerciseOne')


let obtenerIndice = (valor, array) =>{
   console.log(array.indexOf(valor))
   let result = array.indexOf(valor)
   showExerciseOne.innerHTML += `
                                <h2>Valor: ${valor} <span>índice: ${result} <span></h2>
                                 `
}
obtenerIndice(12, [5, 7, 12, 34, 54, 2, 12]) // 2
obtenerIndice(83, [5, 7, 12, 34, 54, 2, 12]) // -1

const add = (numbers) =>{
   let containerExerciseTwo = document.querySelector('.containerExerciseTwo')
   
   let accumulator = 0 
   numbers.forEach(number => {
      result= accumulator += number
   });
   containerExerciseTwo.innerHTML+= `<p>Result = ${accumulator}<p>`
}
add([1,5,5])
add([5,7,10,12,24])
