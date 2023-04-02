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

const content = (number, numbers) =>{
   console.log(numbers.includes(number))
   let showExerciseThree = document.querySelector('.containerExerciseThree')
   let result = numbers.includes(number)
   let span = document.createElement('span')
   let p = document.createElement('p')
   if(result == true){
      p.innerText = `This number ${number} is inside: `
      span.innerText = `${result}`
      span.style.color='green'
   }else{
      p.innerText = `This number ${number} is not inside: `
      span.innerText = `${result}`
      span.style.color='red'
   }
   
   showExerciseThree.appendChild(p)
   p.appendChild(span)
                                 
}
content(8, [9,3,4,8])
content(10, [50, 10, 9])
content(0, [21, 9, 9])

