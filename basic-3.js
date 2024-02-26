var prompt=require('prompt-sync')()
var x=Number(prompt("Enter the first numner: "))
var y=Number(prompt("Enter the last numner: "))
var sum=0
for(x;x<=y;x++){
   sum=sum+x
}
console.log("The sum of the series is: ",sum)

var sum=0
    for(i=2;i<=500;i=i+2){
        sum=sum+i
    }
    console.log("the sum of all even numbers from 1 to 500 is:",sum)

    var sum=0
    for(i=1;i<=500;i=i+2){
        sum=sum+i}
        console.log("the sum of all odd numbers from 1 to 500 is:",sum)

        var a=3
    var n=100
    var d=5
    var nth_term=a+(n-1)*d
    console.log("100th term is:",nth_term)
    var sum=0
    for(a;a<=nth_term;a=a+5){
        sum=sum+a
    }
    console.log("the sum of this series till 100th term is:",sum)