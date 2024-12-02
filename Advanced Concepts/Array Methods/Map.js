// map() it is take callback function and arrow function inside and condition that you want 


const myNumbers = [1,2,3,4,5,6,7,8,9,10]

// const OurNumbers = myNumbers.map((num) => num + 1 )

// chanings 
 
const newNums = myNumbers
               .map((num)=>  num  * 10)
               .map((num)  => num + 1)
               .filter((num)=> num >= 20);
console.log(newNums);


