// let arr = [5,6,7,8,9]
// function add(x,y,z,a,b){
//     return x+y+z+a+b;
// }
// var x = add(...arr)
// console.log(x)

function add(...other){
    return other.reduce((total,item)=>total+=item)

}
var x = add(2,3,4,52,3,23,23,234,34,23,23,23,23,23,23,2,3)
console.log(x)