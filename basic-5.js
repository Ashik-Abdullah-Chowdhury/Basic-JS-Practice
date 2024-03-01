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


function  square(x){
    return x**2
  }
  ar1=[1,2,3,4]
  ar2=ar1.map(square)
  console.log(ar2)

 
  function login(name="guest"){
    console.log("You are welcome!",name)
    // return
  }
  login("Rahim")
  login()

 
  function a(x){
    var Y=x**2+2*x+6
    console.log(Y)
    return Y
    }
    a(2)
