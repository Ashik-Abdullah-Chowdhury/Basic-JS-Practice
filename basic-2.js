// var prompt=require('prompt-sync')()
// var password=prompt("enter password: ")
// if(password=="ashik"){
//     console.log("you are welcome")
// }
// else if(password=="abdullah"){
//     console.log("You are welcome")
// }
// else if(password=="chowdhury"){
//     console.log("You are welcome")
// }
// else{
//     console.log("Sorry! We don’t find you in the system.")
// }


// var prompt=require('prompt-sync')()
// var year=prompt("enter year: ")
// var a=year%4
// var c=year%400

// if(a==0){
//     console.log("its a leap year")
// }
// else if(c==0){
//     console.log("its a leap year")
// }
// else{
//     console.log("its not a leap year")
// }


var prompt=require('prompt-sync')()
var item1=prompt("enter price of first item: ")
var item2=prompt("enter price of second item: ")
var item3=prompt("enter price of third item: ")
var total=Number(item1)+Number(item2)+Number(item3)
if(total>100){
    console.log(total-total*0.2)
}
else if(total>50){
    console.log(total-total*0.1)
}
else if(total<50){
 console.log("no discount")
}