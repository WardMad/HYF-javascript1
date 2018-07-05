var a = true;
console.log('The value of my variable a is: ' + a);

var b = 28.5;
console.log('The value of my variable b is: ' + b);

var c = "swimming";
console.log('The value of my variable c is: ' + c);

var d = {name: "Ward"};
    console.log('The value of my variable d is: ' + d);

//my opinion
 console.log('The value of my variable a is: boolean' );
 console.log('The value of my variable a is: number' );
 console.log('The value of my variable a is: string' );
 console.log("The value of my variable a is: 'object'" );

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(typeof d);

var e = false; 
if(typeof a === typeof e){
 console.log("SAME TYPE") 

}else{
 console.log("It's not a same type") 
}
