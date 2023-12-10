//destructuring 

  let num1 = 33;
let num2 = 87;
console.log(num1, num2);
  document.writeln("Before swapping number on is "+ " "+ num1 + "  number two is  " +num2 +'<br>');
[num1, num2] = [num2, num1];
document.writeln("After Swapping number one is "+num1+'  number two is '+num2+'<br>')

document.writeln('========================'+"<br>")



//---------------------------------------------
// var array = []; 
//    var size = 5; 
//    for (var a = 0; a < size; a++) {
//       array[a] = prompt('Enter array Element number ' + (a + 1));
//    }
 
//    var Max_array = Math.max(...array);
//       document.writeln("The maximum value in the array is: "+ Max_array);
//    //document.write(Max_array);


//  var min_array = Math.min(...array);
//  document.write('<br>')
//       document.writeln("The minimum value in the array is:  "+ min_array);
   
//---------------------------------------------
//using  spread

// let arr=[10,20,50,90,30,70];
// let min=(Math.min(...arr));
// let max=(Math.max(...arr));

// document.writeln("min value  is : "+min);
// document.writeln("max value  : "+max);

// ------------------------
function find(...numbers) {
  
  var min = Math.min(...numbers);
  var max = Math.max(...numbers);

  return { min, max };
}

var arr = [15, 20, 50, 100, 30, 70];
var { min, max } = find(...arr);

document.writeln("min value is: " + min);
document.writeln("max value: " + max);

// -------------------------

  //Array APIs

var fruits=["apple","strawberry","banana","orange","mango"]
//a-test that every element in given array is string
var result1=function(x) {
    return x.every(i => (typeof i === "string"));
  }

//b-test some of array elements starts with a
var result2 = fruits.some((item, index) => {
    return item.startsWith("a");
   });
   //console.log(result2) 

//c-generate new array filtered from given array with only elements that starts with s or b
var result3 = fruits.some((item, index) => {
     return item.startsWith("s")|| item.startsWith("b");
     
    });
    //console.log(result3)

//d-generate new array each element of new array contains a string declaring that you like the given fruit element 
var result4 = fruits.map((item) => {
     return `i like ${item}`;
   });
   //console.log(result4)

//e- use foreach to display all elements of new array 
fruits.forEach((item, index) => {
  console.log(item, index);
  });    