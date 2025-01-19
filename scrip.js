// const user = {
//     firstName : "Adfar",
//     lastName : "Rasheed",
//     age : 25,
//     getAgeYear:function(){
//         return new Date().getFullYear()- user.age
//     }
// }
// const user2 = {
//     firstName : "Adfar",
//     lastName : "Rasheed",
//     age : 25,
//     getAgeYear:function(){
//         return new Date().getFullYear()- user.age
//     }
// }

// function createUser(firstName,lastName,age){
//     const user = {
//         firstName : firstName,
//         lastName : lastName,
//         age : age,
//         getAgeYear:function(){
//             return new Date().getFullYear()- this.age
//         }
//     }
//     return user
// }

// const user1 = createUser("Adfar","Rasheed",28)
// const user2 = createUser("Rohan","Kumar",24)


// let arr1 = [4,5,6,7,8,9]
// let arr2 = [3,4,3,4,2,7]

// function getAgeYear(){
//     return new Date().getFullYear()- this.age
// }
// function createUser(firstName,lastName,age){
//     const user = {
//         firstName : firstName,
//         lastName : lastName,
//         age : age,
//         getAgeYear:createUser.commonMethods.getAgeYear,
//         getFullName:createUser.commonMethods.getFullName
//     }
//     return user
// }
// createUser.commonMethods = {
//     getAgeYear : function(){
//         return new Date().getFullYear()- this.age
//     },
//     getFullName: function(){
//         return this.firstName + " " + this.lastName
//     }
// }
// const user1 = createUser("Adfar","Rasheed",28)
// const user2 = createUser("Rohan","Kumar",24)


// function createUser(firstName,lastName,age){
//     const user = {
//         firstName : firstName,
//         lastName : lastName,
//         age : age,
//         getAgeYear:createUser.prototype.getAgeYear,
//         getFullName:createUser.prototype.getFullName
//     }
//     return user
// }
// createUser.prototype = {
//     getAgeYear : function(){
//         return new Date().getFullYear()- this.age
//     },
//     getFullName: function(){
//         return this.firstName + " " + this.lastName
//     }
// }
// const user1 = createUser("Adfar","Rasheed",28)
// const user2 = createUser("Rohan","Kumar",24)


// function createUser(firstName,lastName,age){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//     this.getAgeYear = function(){
//         return new Date().getFullYear()- this.age
//     }
// }
// const user1 = new createUser("ADfar","Rasheed",28)
// const user2 = new createUser("Rohan","Kumar",24)

// // createUser.prototype.getAgeYear = function(){
// //     return new Date().getFullYear()- this.age
// // }
// // createUser.prototype.getFullName = function(){
// //     return this.firstName + " " + this.lastName
// // }


// class createUser{
//     constructor(firstName,lastName,age){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age=age;
        
//     }
    
//     getAgeYear (){
//         return new Date().getFullYear()- this.age
//     }
// }

// const user1 = new createUser("ADfar","Rasheed",28)
// const user2 = new createUser("Rohan","Kumar",25)
// console.log(user1) 


function Calculator(){
    this.value = 0;
    this.add = function(num){
        this.value += num;
        return this
    }
    this.multiply = function(num){
        this.value *= num;
        return this
    }
    this.getValue = function(){
        return this.value
    }
}
const a = new Calculator()
var b = a.add(5).add(10).multiply(2).getValue() // 30
console.log(b)