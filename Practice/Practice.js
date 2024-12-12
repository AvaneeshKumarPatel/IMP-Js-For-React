 
 // So we are going to practice for above we read 



 
 
 // Let's Start with Map() Function 



 // Question 1 > Square each number in an array:
 
                                                
 const numbers = [1, 2, 3, 4, 5];                                     // Output: [1, 4, 9, 16, 25]


// Ans =  
const Square = numbers.map((nums)=> nums * nums)

console.log(Square);


// Q.2 = Convert an array of strings to uppercase:

const fruits = ["apple", "banana", "cherry"];                         // Output: ["APPLE", "BANANA", "CHERRY"]


// Ans =

const UPPrcase = fruits.map((fruit)=> fruit.toUpperCase() );

console.log(UPPrcase);


// Q3. Extract names from an array of objects:

const users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 }
];                                                                      // Output: ["Alice", "Bob", "Charlie"]

                                                        
// Ans 

const UserName = users.map((item)=> item.name);

console.log(UserName);


// Q4 = Add a fixed number to each element of an array:


const nums = [10, 20, 30];
const addValue = 5;                                                           // Output: [15, 25, 35]


const AddedValue = nums.map((number) => number + addValue )  
console.log(AddedValue)





  // Now here  Question and Answer for Filter()  function 


// Q1 = Filter out even numbers from an array:

const numbbers = [1, 2, 3, 4, 5, 6];                                     // Output: [1, 3, 5]


const filtered = numbbers.filter((values) => values % 2 === 1 )

console.log(filtered);


// Q2 = Get all users above 18 years of age: 

const userss = [
    { name: "Alice", age: 17 },
    { name: "Bob", age: 20 },
    { name: "Charlie", age: 16 },
    { name: "Dave", age: 25 }
];                                                                               // Output: [{ name: "Bob", age: 20 }, { name: "Dave", age: 25 }]


const aboveUserAdult =userss.filter((allUsers) => allUsers.age >= 18 )

console.log(aboveUserAdult);


// Q3 = Find strings with more than 5 characters:

const words = ["short", "lengthy", "tiny", "extravagant"];                             // Output: ["lengthy", "extravagant"]

// Ans = 

const MorethanFiveCHAR = words.filter((allWorlds )  => allWorlds.length > 5)       

 console.log(MorethanFiveCHAR , 'More than 5 five Char')

// Q4 = Filter numbers divisible by 3:

const Nums = [3, 5, 9, 11, 15, 17];                                                         // Output: [3, 9, 15]

// Ans =

const DivisibleByThree = Nums.filter((Number)  => Number % 3  === 0);

console.log(DivisibleByThree);


// Now here  Question and Answer for reduce()  function 


  // Q1 = Find the sum of all numbers in an array:

  const NNumbers = [1, 2, 3, 4, 5];                                                             // Output: 15

  // Ans = 
 
  const AddTotal = NNumbers.reduce((acc ,nnnums)=> acc + nnnums, 0 )

  console.log(AddTotal);


  // Q2 Find the product of all numbers in an array:

  const numbersss = [1, 2, 3, 4];                                                                // Output: 24

  const product = numbersss.reduce((acc ,numms) => acc * numms, 1)

  console.log( 'Product', product)
  // Q3 = Count the occurrences of each character in a string:
  
  const str = "hello";                                                                            // Output: { h: 1, e: 1, l: 2, o: 1 }
 
   //  i'm stuck with this question 


   // Q4 = Combine an array of strings into a single sentence:

   const wordsss = ["JavaScript", "is", "awesome"];                                             // Output: "JavaScript is awesome"

   //  i'm stuck with this question 



   // Q5 = Find the maximum number in an array using reduce():


    const nuums = [5, 12, 7, 3, 18];


    const MaxNum = nuums.reduce((acc , NNNumbber)=> NNNumbber > acc );

    // stuck 



    // 4. Combine map(), filter(), and reduce()



    // Q.1 = Get the total age of users above 18 years:
const UUsers = [
    { name: "Alice", age: 17 },
    { name: "Bob", age: 20 },
    { name: "Charlie", age: 16 },
    { name: "Dave", age: 25 }
];                                                                                                         // Output: 45 (Bob + Dave)

 
const Alluser = UUsers.filter((item)=> item.age > 18)

                      .reduce((acc, emm)  => emm.age + acc, 0 )

    console.log(Alluser);



    // i'm stuck all with rest 




    

