// The Object.entries() method in JavaScript gets all the key-value pairs from an object and puts them into an array. 
// Each item in the array is a small array, where the first element is the key and the second element is the value.
//  This method is useful when you want to loop through an object or change its data like you would with an array.


// Syntax 
Object.entries(objectName);


// Example  1

const obj = { 
    0: 'adam',
    1: 'billy', 
    2: 'chris',
 };

console.log(Object.entries(obj)[1]);                    // Output will be ['1','billy']

// Example 2

const obj2  ={
  
    Name: 'User-Name',
    UserNum: 2345,
    add: 'rtyuiop'

};
 
console.log(Object.entries(obj2));    // Output => [ [ 'Name', 'User-Name' ], [ 'UserNum', 2345 ], [ 'add', 'rtyuiop' ] ]


