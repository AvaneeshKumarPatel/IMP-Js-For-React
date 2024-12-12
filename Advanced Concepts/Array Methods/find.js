// The find() method in JavaScript is a powerful array method used to locate the first element in an array
// that satisfies a specified condition (provided as a callback function). Once the condition is met, 
// it immediately returns the element. If no element matches the condition, it returns undefined.



// Syntax 
// array.find(callback(element, index, array), thisArg);


//    Parameters: 
//   1. callback: A function that is executed on each element of the array. It takes three arguments:
//    element: The current element being processed.
//    index (optional): The index of the current element.
//    array (optional): The array find() was called on.

//  2.  thisArg (optional): An object to use as this when executing the callback.


//  How It Works: 
//               The find() method iterates through the array in order.
//               For each element, it calls the callback function.
//               If callback returns true, find() immediately returns the current element.
//               If no elements satisfy the condition, find() returns undefined.



// Example =


const arr = [1,2,3,4,5,6,7,8,9,10]


const Result = arr.find((nums)=> nums < 10)

console.log(Result);


