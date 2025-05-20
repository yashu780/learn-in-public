function for2s(){
    return new Promise((resolve)=>{setTimeout(resolve,2000)});
}
function main(){
    console.log("start");

}
for2s().then(main);// / this will not work as expected because the function is not called after 2 seconds
// for2s(main); // this will work as expected because the function is called after 2 seconds
//console.log(for2s);
//work of resolve
function random(resolve){
    resolve();

}
let p=new Promise((resolve) => {
    setTimeout(() => resolve("hello world"), 3000);
});
p.then((value) => console.log(value)); // this will print "hello world" after 3 seconds
function fsfilepromisifiedversion(){
    const fs=require('fs');// import file system module
   // const data=fs.readFileSync('file.txt','utf-8');
    return new Promise((resolve)=>{
        fs.readFile('file.txt','utf-8', (err, data)=>{
            if(err){
                console.log(err);
                resolve(err);
            }
            else{
                console.log(data);
                resolve(data);
            }
            });
        });
    }
    fsfilepromisifiedversion().then((data)=>{
    console.log("file read successfully",data);
},(err)=>{
    console.log("error in reading file",err);
});
function callback(){
    console.log("hi");
}
setTimeout()