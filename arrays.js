// // // var arr = [3,4,5,6,7,8]
// // // console.log(arr[4])

// // // var arr = [
// // //     [1,2,3],
// // //     [4,5,6],
// // //     [7,8,9]
// // // ]
// // // console.log(arr[2][1])

// // // // var arr = [4,5,6,7]
// // // // arr.push("a","b")
// // // // console.log(arr)

// // // // var arr2 = [3,4,5,6,7].push("adfar","rasheed",4,5,6)
// // // // console.log(arr2)
// // // var arr = [1,2,3,4,5,6]
// // // var x =arr.pop()
// // // console.log(x)


// // var arr = [1,3,4,5,6,7]

// // var x = arr.slice(2)

// // console.log(x)

// var arr = [4,5,6,7,8,9]
// var x = arr.shift()
// console.log(x)

// var arr = [2,3,4,6,7]
// var x =arr.unshift("a","b")
// console.log(x)


// var arr = [3,4,5,6,7,8]
// var x =arr.splice(2,0,"a","b","c","d")
// console.log(x)
// console.log(arr)

// var arr = [2,4,6,8,10]
// var arr1= [];
// for(var i=0;i<arr.length;i++){
//     arr1.push(arr[i]*arr[i])
// }
// console.log(arr1)


// var arr = [2,3,4,5,6]
// var arr2 = arr.map(function (item,index){
//    return item>3
// })
// var arr3 = arr.map((item)=>item*10)
// console.log(arr2)


// var arr = [4,5,6,7,8,9]
// var x = arr.filter((item,index)=>{
//     return item>5
// })
// console.log(x)  // [6,7,8,9]  // [6,

// var arr = [4,5,6,7,8,9]
// var arr2 = arr.reduce((total,item)=>{
//     return total*item
// },10)

// console.log(arr2)

// var arr = [4,-200,100.5,-1.5,3.21,20,8,3,9,1]

// arr.sort((a,b)=>{
//     return b-a
// })
// console.log(arr)


// var arr =  [1,2,3,4,3,5];
// var x = arr.find((item,index)=>{
//     return item > 35
// })
// console.log(x)

// var arr = [5,6,7,8,9,1]
// var x = arr.findIndex((item,index)=>{
//     return item > 53
// })
// console.log(x)


// var arr = [34,2345,345,234,234,2,32]
// var x = arr.some((item,index)=>{
//     return item > 20000
// })
// console.log(x)

// var arr = [1,2,3,45,5,6,4,53]
// var x = arr.every((item,index)=>{
//     return item>0
// })
// console.log(x)

// var arr = [1,2,[3,4,5,["a",[[[[[[[[[[["Adfar"]]]]]]]]]]],"b","c"],5,6],"adfar"];
// var arr1= arr.flat(50)
// console.log(arr1)

// var arr1 = [1,2,3];
// var arr2 = [4,5,6];
// var arr3 = [7,8,9];
// var arr4=[].concat(arr2,arr1,arr3)
// console.log(arr4)

// var arr1=[1,2,3]
// var arr2 = [4,5,6]
// var arr3 = [7,8,9];
// var arr4 = [...arr1,...arr2,...arr3]
// console.log(arr4)

// var arr = [1,2,3,4,5]
// var [a,b] = arr;
// console.log(a,b);

// var arr = ["a","d","f","a","r"]
// var str = arr.join()
// var arr1 = str.split(",")
// console.log(arr1)
// var x = arr1.reverse()
// var y = x.join("")
// console.log(y)

// var arr = [12,2,3,3,3,2];
// arr.forEach(element => {
//     console.log(element*2)
// });


var arr = [3,4,5,23,2,3,23]
for (let x of arr){
    console.log(x)
}