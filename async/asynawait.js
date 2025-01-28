async function greet(){
    console.log("Hello, World!");
    return "Adfar"
}
var a =greet()
async function add(){
    console.log("1")
    // a.then((result)=>{
    //     console.log(result)
    //  })
    let data =await a
    console.log(data)
    console.log("3")
}
console.log("2")
add()
console.log("4")