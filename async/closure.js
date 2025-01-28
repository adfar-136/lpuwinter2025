function outer(){
    let x = 10;
    console.log(x)
    return function(){
        x++;
        console.log(x);
    }
}
let x = outer();
x();
x()