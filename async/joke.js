// var data = fetch("https://official-joke-api.appspot.com/random_joke")
// data.then((result)=>{
//    return result.json()
// }).then((response)=>{
//     console.log(response)
// })


async function generateJoke(){
    const response = await fetch("https://official-joke-api.appspot.com/random_joke")
   const jsonData =await response.json()
   console.log(jsonData)
}
generateJoke()