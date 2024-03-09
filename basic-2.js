// Write code: Suppose you have a login system where you can log in by using only any of three names.
// 1) Determine three names inside your code.'
// 2) Write a code that takes the user input.
// 3) If the user provided name doesn’t match with none of your predetermined names it will display “Sorry! We don’t find you in the system.” Otherwise, it will display
//  “Welcome! “.
var prompt=require('prompt-sync')()
var password=prompt("enter password: ")
if(password=="ashik"){
    console.log("you are welcome")
}
else if(password=="abdullah"){
    console.log("You are welcome")
}
else if(password=="chowdhury"){
    console.log("You are welcome")
}
else{
    console.log("Sorry! We don’t find you in the system.")
}


// Write a code that prompts the user to enter a year. The code should display a message indicating whether the year is a leap year or not.
var prompt=require('prompt-sync')()
var year=prompt("enter year: ")
var a=year%4
var c=year%400

if(a==0){
    console.log("its a leap year")
}
else if(c==0){
    console.log("its a leap year")
}
else{
    console.log("its not a leap year")
}


// Create a simple shopping cart program. The program should:
// 1) Prompt the user to enter the price of three items one by one.
// 2) Apply a discount based on the total cost.
// 3) If the total cost is greater than 50 TK, apply a 10% discount. If the total cost is greater than 100, apply a 20% discount. 
// Use the formula: discountedCost = totalCost - (totalCost * discount)
// 4) Display the final cost after applying the discount.
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


// Write a code that calculates the final grade for a student based on their scores in different subjects. The program should:
// 1) Prompt the user to enter the scores for three subjects: Math, English, and Science.
// 2) Calculate the average score using the formula: average = (mathScore + englishScore + scienceScore) / 3.
// 3) Display the final average score.
// 4) Use conditional statements to determine and display the corresponding letter grade based on the following grading scale:
// A:  > 60 
// F: <60
var prompt=require('prompt-sync')()
var Mathscore=prompt("enter the score of Math: ")
var Sciencescore=prompt("enter the score of Science: ")
var Englishscore=prompt("enter the score of English: ")
var average=(Number(Mathscore)+Number(Sciencescore)+Number(Englishscore))/3
console.log("average= ",average)
if(average>=60){
    console.log("You are passed")
}
else if(average<60){
    console.log("You are failed")
}