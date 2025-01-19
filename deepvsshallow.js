var obj = {
    name:"Adfar",
    age:28,
    city:"Dhaka",
    address:{
        street:"Dhanmondi",
        house:"12/A"
    }

}
// const shallowCopy = Object.assign({},obj)
// shallowCopy.address.street="LPU"
// console.log(shallowCopy)
// console.log(obj)




// var obj = {
//     name:"Adfar",
//     age:28,
//     city:"Dhaka",
//     address:{
//         street:"Dhanmondi",
//         house:"12/A"
//     }
// }
// var x = JSON.parse(JSON.stringify(obj))
// x.address.street= "gsdfvgh"
// console.log(x)
// console.log(obj)



var obj = {
    name:"Adfar",
    age:28,
    city:"Dhaka",
}


Object.defineProperty(obj,"name",{
    writable:true,
    enumerable:false
})

for(let key in obj){
    console.log(key)
}