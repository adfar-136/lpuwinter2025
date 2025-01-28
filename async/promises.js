console.log("1")
var promise = new Promise((resolve,reject)=>{
    console.log("2")
    var name = "Adfar"
    if(name === "Adfar"){
        resolve(name)
    } else {
        reject("error")
    }
})
console.log("3")
promise.then((res)=>{
    console.log(res)
}).catch((err)=>{
    console.log(err)
})
// promise.then((res)=>{
//     console.log(res)
// },(err)=>{
//     console.log(err)
// })