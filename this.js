console.log(this)
function greet(){
    console.log("Hello")
    console.log(this)
}
// greet()
var obj = {
    name:"Adfar",
    age:28,
    saymyName :function(){
        return "my name is "+ this.name +"my age is "+ this.age
    }
}
var x= obj.saymyName()
console.log(x)

