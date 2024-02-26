var student ={ 
    name: "Ashik", 
    age : 22, 
    numbers:[89, 76, 56],
    average:function(){
    return (this.numbers[0]+this.numbers[1]+this.numbers[2])/3 
    }
}
console.log(student.average())


var person={
    Name:"Lionel Messi",
    Age:36,
    Occupation:"Footballer"
}
console.log(person.Name)
console.log(person.Age)
console.log(person.Occupation)
person.Age=38
console.log(person.Age)
person.hobby="Playing football"
console.log(person.hobby)