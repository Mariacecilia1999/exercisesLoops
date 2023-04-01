
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