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