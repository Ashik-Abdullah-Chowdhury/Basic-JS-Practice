// We have a matrix:
// [[1, 2, 3],
// [4, 5, 6],
// [7, 8, 9]]
// Write a code that will increase the value of each element in this matrix by 1.  Display both the original and increased matrix. 
var a=[[1, 2, 3],
[4, 5, 6],
[7, 8, 9]]
console.log("original matrix: ",a)
var b=[]
var c=[]
var d=[]
var x=[]
for(i=0;i<1;i++){
for(j=0;j<3;j++){
b.push(a[i][j]+1)
}
}
for(i=1;i<2;i++){
for(j=0;j<3;j++){
c.push(a[i][j]+1)
}
}
for(i=2;i<3;i++){
for(j=0;j<3;j++){
d.push(a[i][j]+1)
}
}
x.push(b,c,d)
console.log("Increased matrix: ",x)


// By using a loop, write a code that takes 5 numbers from the user. Display both the sorted and unsorted versions of the numbers.
var prompt=require('prompt-sync')()
var a=[]
for(i=0;i<5;i++){
var number=Number(prompt("Enter a number: "))
a.push(number)
}
console.log("unsorted number",a)
console.log("sorted numbers",a.sort())


// Write a code that will take 5 numbers from user by using a loop.Check whether each number is even or odd.Store the result (even/odd) in an array.Finally,display the array outside the loop.
var prompt=require('prompt-sync')()
ar=[]
for(i=0;i<5;i++){
var number=Number(prompt("Enter a number: "))
if(number%2==0){
console.log(number," is an even number")
ar.push("even") }
else{
console.log(number," is an odd number") 
ar.push("odd")  
}
}
console.log(ar)


// mat = [
// [2, 7, 89, 6],
// [90, 45,3, 7],
// [78, 56, 4, 2]
// ]
// Write a code that stores the elements of the above 2D array in a 1D array. Display the final 1D array.     
var mat = [
[2, 7, 89, 6],    
[90, 45,3, 7],     
[78, 56, 4, 2]    
]
var matx=[]
for(i=0;i<mat.length;i++){
for(j=0;j<4;j++){ 
console.log(mat[i][j])
matx.push(mat[i][j])
}
}
console.log(matx)
