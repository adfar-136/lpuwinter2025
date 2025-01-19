// function greet(){
//     console.log("goodmorning")
// }
// greet()
// console.log(add)
// var add = function(){
//     console.log(5+5)
// }
// add()
//callback functions
// function add(){
//     console.log(5+5)
// }
function greet(x,y){
    x()
    console.log(y)

}
greet(()=>{
    console.log("duheyg")
},"Adfar");

// (function (x,y){ 
//    console.log(x+y)
//     })(3,4);

function add(){

    return 3+5
}

var sum = function (x){

    return x+6
}
var addition = (x)=>{

    return x+6
}
var add = (x,y)=>x+y
console.log(add(5,5))