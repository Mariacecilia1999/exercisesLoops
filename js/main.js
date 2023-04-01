
const add = (numbers) =>{
   let accumulator = 0 
   numbers.forEach(number => {
       accumulator += number
   });
   console.log(accumulator)
}
add([1,5,5])
add([5,7,10,12,24])