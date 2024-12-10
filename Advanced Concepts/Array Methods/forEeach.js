//    forEach() is a method available for arrays that allows you to iterate over each element in the array,
//   and execute a provided function once for each element.

//   Key Points:
//   Non-returning: It doesn't return a new array (unlike map()); it just performs the action you define for each element.
//   Callback Function: You pass a function (callback) to forEach() that runs for every element in the array.

//   Arguments to Callback:
//   The current element being processed.
//   The index of the element (optional).
//   The array being processed (optional).

//  Syntax:

// array.forEach(function (element, index, array) {
  // Code to execute for each element
// });

// Here are the example

const fruits = ["apple", "banana", "juse", "pineapple", "graps", "mango"];

fruits.forEach((items) => {
  console.log(items);
});




// Let's solve some questions 

//Basic Level
 // 1.Iterate through an array of numbers and print each number.

 let numbers = [1, 2, 3, 4, 5];
 // Use forEach to print each number
 
 numbers.forEach((nums)=> {
    console.log(nums);
 })



// 2.  terate through an array of strings and log each string in uppercase.

let words = ["apple", "banana", "cherry"];
// Use forEach to log each word in uppercase


words.forEach((UPprcase)=> {

    console.log(UPprcase.toUpperCase());
})

// 3. Calculate the sum of all numbers in an array using forEach().


let Addnumbers = [10, 20, 30, 40];
// Use forEach to calculate the sum of numbers

Addnumbers.forEach((addedNums)=> {

    console.log(addedNums + addedNums);
})


// Intermediate Level

// 1.  Iterate through an array of objects and log a specific property of each object.

let users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 }
];
// Use forEach to log the names of all users

users.forEach((allUsers)=> {

    console.log(allUsers.name);
})


// 2.  Count the number of odd and even numbers in an array.

  let FindOddEvenNumbers = [1, 2, 3, 4, 5, 6];
  // Use forEach to count odd and even numbers



FindOddEvenNumbers.forEach( (OddAndEven) => {
 

    const Result =  {
        odd: [],
        even:[]
     
      };
      

    if( OddAndEven % 2 === 0 ) {
       Result.even.push(OddAndEven)

    }else{
        Result.odd.push(OddAndEven);
   
    };
    console.log(Result);
} );



// 3 Add a new property to each object in an array of objects.

let products = [
    { name: "Laptop", price: 1000 },
    { name: "Phone", price: 500 },
    { name: "Tablet", price: 300 }
];
// Use forEach to add a 'discountedPrice' property (10% off) to each product



products.forEach((itemss)=> {
console.log()
 // stuck here 
})


// 4 Filter out specific elements using forEach and push them to a new array.


let nnumbers = [5, 10, 15, 20, 25];
// Use forEach to create a new array with numbers greater than 15

nnumbers.forEach((numms)=> {

    const NewArru =[];

    numms <= 15 



})