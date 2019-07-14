console.log('GOOD LUCK 👩‍💻 👨‍💻')
/* Q1:
Create a function called hello
thats take a name
and return Hello + the name that insert 
return null if the name is empty string or null

Ex:  hello("") => null    
Ex:  hello("Jouza") => "HELLO Jouza !"
Ex:  hello("Alex") => "HELLO Alex !"
Ex:  hello(null) => null

*/

function hello(name) {
  // WRITE YOUR CODE UNDER THIS LINE
  var result;
  if ((name != "" && name != null)) {
    console.log("HELLO " + name + " !");
  } else {
    console.log(null);
  }
}
hello("MOHAMAD OBEIDAT")
hello(null);
hello("");

/* Q2:
Create a function called calculateTax
that take number of salees and the amount of tax
and return amount of sales you did + the amonut of tax you should pay
+ the amount of net sales left after the tax paid

Ex: calculateTax(500,0.16) 
=> "You got 500 JD from sales, you should pay 80 JD for tax and you will have 420 JD as net sales."
Ex: calculateTax(315,0.10) 
=> "You got 315 JD from sales, you should pay 31.5 JD for tax and you will have 283.5 JD as net sales."
Ex: calculateTax(100,0.15) 
=> "You got 100 JD from sales, you should pay 15 JD for tax and you will have 85 JD as net sales."
*/

function calculateTax(numOfSales, amountOfTax) {
  // WRITE YOUR CODE UNDER THIS LINE 
  var taxToPay = numOfSales * amountOfTax;
  var total = numOfSales - taxToPay;
  var result = "You got " + numOfSales + " JD from sales, you should pay " + taxToPay + " JD for tax and you will have " + total + " JD as net sales."
  return result;
}
console.log(calculateTax(500, 0.16));
console.log(calculateTax(315, 0.10));
console.log(calculateTax(100, 0.15));

/* Q3:
Using while
Create a function called repeatChar
that takes 2 parameters string and number,
and return the character number of times with space depends on the nubmer that pass
** Important: You should didn,t have extra space or comma at the end
** Important: the character one time capital letter and one time small letter if n
odd start with capital letter 
** Important: you should solve this question using while

Ex: repeatChar("a",2); => "a, A"
Ex: repeatChar("C",5); => "C, c, C, c, C"
*/

function repeatChar(char, number) {
  // WRITE YOUR CODE UNDER THIS LINE
  var result = "";
  while (number >= 1) {
    if (number % 2 === 0) {
      result = result + char.toUpperCase() + ", "
    } else {
      result = result + char.toLowerCase() + ", "
    }
    number--;
  }
  return result.slice(0, -2);;
}
console.log(repeatChar("C", 5));

/* Q4:
Using recursion 
Create a function called stringToCapital
that takes a string 
and return the same string but convert it to upper case
** Important: you should solve this question using recursion
** Important: you should haven't any problem if there is a symbol

Ex: stringToCapital("My Name Is: Alex !") 
=> "MY NAME IS: ALEX !"
Ex: stringToCapital("Are you a student in coding ACADEMY by ORANGE ?") 
=> "ARE YOU A STUDENT IN CODING ACADEMY BY ORANGE ?"
*/

function stringToCapital(string) {
  // WRITE YOUR CODE UNDER THIS LINE
  var leng = string.length - 1;
  var counter = 0;
  var result = string[0].toUpperCase();
  if (counter == leng+1) {
    return "";
  }
  result = result + string[counter++].toUpperCase() + stringToCapital(string.slice(0, leng));
  return result;
}

console.log(stringToCapital("My Name Is: Alex !"))
// Good luck :)