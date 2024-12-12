 // Today i'm going to practice for filter(); method in js

 // filter() its take callback & arrow function inside and , condition 
 
 
 const  Number = [1,2,3,4,5,6,7,8,9,10]
  
      //  auto  return  using()
 const newNumber =  Number.filter((num)=>   num > 7 );
 
 console.log(newNumber);


 // return using return keyword and  this{}

//  const newNumber =  Number.filter((num)=>  {

//     return num < 9 ;

//  });

// console.log(newNumber);
  
//  here is more example and practice for filter method with different condition 

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981,
    edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992,
    edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999,
    edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989,
    edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009,
    edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987,
    edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986,
    edition: 1996 }
    ];


    let  userBooks = books.filter((bk) => bk.genre === 'Fiction' )
   console.log(userBooks);

  // Finding books which is publish after 2000 and second condition below here ; 

     userBooks = books.filter((bk)=> bk.publish <= 1995 && bk.genre === 'Fiction' );
   //console.log(userBooks);

   





   