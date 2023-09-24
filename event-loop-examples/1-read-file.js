
const {readFile, read}= require('fs')

console.log('started a first task');
//CHECK PATH FILE
readFile('./content/first.txt','utf-8',(err,result)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log(result);
    console.log('completed first task');
})

console.log('startinng next task');