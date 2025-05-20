console.log("hello github");
function sum(a,b){
    return a+b;
}
let ans=sum(4,5);
console.log(ans);
const fs=require('fs');// import file system module
const data=fs.readFileSync('file.txt','utf-8');// read file synchronously
//const data=fs.readFile('file.txt','utf-8', (err, data)//read file asynchronously
console.log(data);
function timeout(){
    console.log("timeout function called");
}
console.log("hi");
setTimeout(timeout, 20000);//  
console.log("timeout function set");//first all the code will be executed then the timeout function will be called after 20 seconds