// Write a function that will take two numbers and three callback functions as Parameters.Calculate summation,subtraction,multiplication using callback function and display the result
function summation(a,b){
  return a+b
}
function subtraction(c,d){
  return c-d
}
function multiplication(e,f){
  return e*f
}
function calculation(num1,num2,summation,subtraction,multiplication){
var x=summation(num1,num2)
var y=subtraction(num1,num2)
var z=multiplication(num1,num2)
console.log("summation is: ",x,"\n","subtraction is: ",y,"\n","multiplication is: ",z)
return x,y,z
}
var prompt=require('prompt-sync')()
var num1=Number(prompt("enter the first number: "))
var num2=Number(prompt("enter the second number: "))
calculation(num1,num2,summation,subtraction,multiplication)


// Suppose you have an array containing a few numbers, now use the “. map()” method of the array to square all the numbers of the array.
function  square(x){
  return x**2
}
ar1=[1,2,3,4]
ar2=ar1.map(square)
console.log(ar2)

// Write a function that takes only the name of the user as a parameter and displays a welcome message. The default value of the user's name will be “guest”.

function login(name="guest"){
  console.log("You are welcome!",name)
}
login("Rahim")
login()


// Suppose we have an equation: Y = x^2 + 2x + 6. Write a function that will take the value of x as a parameter and return the value of Y.
function a(x){
  var Y=x**2+2*x+6
  console.log(Y)
  return Y
  }
  a(2)