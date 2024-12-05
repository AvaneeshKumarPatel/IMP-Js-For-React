
const myArr =[1,2,3];

// simple way 

// const TotalArr = myArr.reduce( function(acc , currval) {

//     console.log(`acc: ${acc} Currval: ${currval}`);
//     return acc + currval;

// },0);

// In  short
const TotalArr = myArr.reduce((acc ,currVal)=> acc + currVal , 0)



console.log(TotalArr);



const ShoppingCart = [
    {
        itemName: 'Js Course',
        price: 2999
    },
    {
        itemName: 'py Course',
        price: 999
    },
    {
        itemName: 'Mobile Dev Course',
        price: 5000
    },
    {
        itemName: ' Data sceince  Course',
        price: 12000
    },
]

// short 

  const PayPrice = ShoppingCart.reduce(( acc, item)=> acc + item.price, 0)
  console.log(PayPrice)
// step -by -step how it is working 

 const TotalPrice = ShoppingCart.reduce( function(acc , item) {
    console.log(`accKiValu:${acc} itemKiValue:${item.price} `)
   return acc + item.price;

 },0)

console.log(TotalPrice);