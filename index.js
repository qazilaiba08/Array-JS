
// 1. Declare an empty array using JS literal notation to store
// student names in future.
// 2. Declare an empty array using JS object notation to store
// student names in future.
// 3. Declare and initialize a strings array.
// 4. Declare and initialize a numbers array.
// 5. Declare and initialize a boolean array.
// 6. Declare and initialize a mixed array.

//1 ans

let studentName = [];
console.log(studentName);

// 2 

let studentNameObject = new Array();
console.log(studentNameObject);

// 3

let string = ["Apple","Berry","Mango"];
console.log(string);

// 4 

let number = [1,2,3,4,5];
console.log(number);

//5

let boolean = [true,false];
console.log(boolean);

// 6 

let mixedArray = [1,4,"Banana",false,"root",67];
console.log(mixedArray);

//7


let qualificationInPakistan = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];

document.write("<h2>Qualification</h2>");
document.write("<ol>");

for (let i = 0;i <= 7; i++) {
  document.write("<li> <b>" + qualificationInPakistan[i]+ "</b></li>");
 }

document.write("</ol>");

//8. Write a program to store 3 student names in an array.Take
// another array to store score of these three students.
// Assume that total marks are 500 for each student, display
// the scores & percentages of students like:

const studentNames = ["Micheal", "John", "Tony"];
const studentScore = [320, 230, 480];
let total = 500;
const percentage1 = (studentScore[0] / total) * 100;
const percentage2 = (studentScore[1] / total) * 100;
const percentage3 = (studentScore[2] / total) * 100;
document.write("Score of  " + studentNames[0] + " is " + studentScore[0] + " . Percentage: " + percentage1 + "%");
document.write("<br> Score of  " + studentNames[1] + " is " + studentScore[1] + " . Percentage: " + percentage2 + "%");
document.write("<br> Score of  " + studentNames[2] + " is " + studentScore[2] + " . Percentage: " + percentage3 + "%"+"<br>");

// 9. Initialize an array with color names. Display the array
// elements in your browser.

// Initialize an array with color names
let color = ["orange","red","green","peach","yellow"];
document.write("ORIGINAL Array :"+color+"<br>")

// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser.

let userInput = prompt("Enter a color to add to the beginning:");
color.unshift(userInput)
document.write( "updated Array :"+color+"<br>");

// b. Ask the user what color he/she wants to add to the end
// & add that color to the end of the array. Display the
// updated array in your browser.

// let userInput1 = prompt("Enter a color to add to the end");
// color.push(userInput1);
// document.write(" updated Array :"+color +"<br>");

// // c. Add two more color to the beginning of the array.
// // Display the updated array in your browser.

// color.unshift("Purple", "grey")
// document.write(" updated Array :"+color +"<br>");

// // d. Delete the first color in the array. Display the updated
// // array in your browser.

// let userInput2 = prompt("Enter a color to delete to the end");
// color.shift(userInput2)
// document.write( "updated Array :"+ color +"<br>");

// // e. Delete the last color in the array. Display the updated
// // array in your browser.

// color.pop();
// document.write( "updated Array :"+color +"<br>");

// // f. Ask the user at which index he/she wants to add a color
// // & color name. Then add the color to desired
// // position/index. . Display the updated array in your
// // browser.

// let index = prompt("Enter the index at which you want to add a color :");
// let userInput3 = prompt("Enter the color you want to add : ");

// color.splice(index ,0 ,userInput3);

// document.write( "updated Array :"+color+"<br>")

// // g. Ask the user at which index he/she wants to delete
// // color(s) & how many colors he/she wants to delete. Then
// // remove the same number of color(s) from user-defined
// // position/index. . Display the updated array in your
// // browser.

// let index1 = prompt("Enter the index at which you want to add a color :");
// let userInput4 = prompt("Enter the color you want to add : ");

// color.splice(index1 ,userInput4);

// document.write( "updated Array :"+color+"<br>")

// // 10. Write a program to store student scores in an array &
// // sort the array in ascending order using Array’s sort
// // method.

// let score = [320,230,480,120];
// document.write("<h3>Scores of Students:"+ score+"<br>")
// score.sort()
// document.write("<h3>Scores of Students:"+ score+"<br>")

// // 11. Write a program to initialize an array with city names.
// // Copy 3 array elements from cities array to selectedCities
// // array.

// let city = ["Karachi","Lahore","Islamabad","Quetta","Peshawer"];
// document.write("Cities names : "+city+"<br>");

// city.splice(0,2);
// document.write("Selected Cities : "+city+"<br>");

// 12. Write a program to create a single string from the
// below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// (Use array’s join method)

  // Initialize the array with the given elements
  var arr = ["This ", " is ", " my ", " cat"];
  document.write("single string array : "+"<br>"+arr+"<br>");

  let join = arr.join("")
  document.write("array join method : "+"<br>"+join+"<br>");

//   13. Create a new array. Store values one by one in such a way
// that you can access the values in the order in which they
// were stored. (FIFO-First In First Out)

document.write("<br><br>"+" Fruits : ")
let fruits = ['apple', 'banana', 'orange', 'grape', 'peach'];
for(let i = 0; i < fruits.length; i++){
    document.write(fruits[i]+" , ");
}
// 14. Create a new array. Store values one by one in such a way
// that you can access the values in reverse order. (Last In-
// First Out)

    document.write("<br><br>"+"Reverse Fruits : ")
    let Fruits = ['apple', 'banana', 'orange', 'grape', 'peach'];
    for(let i = 20; i >= Fruits.length; i--){
        document.write (i + ",");
        
    }
