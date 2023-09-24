const {readFile, read}= require('fs');
const util=requite('util')
const readFilePromise=util.promisify(readFile)

// getText('./content/first.txt')
//     .then((result)=>console.log(result))
//     .then((err)=>console.log(err))

const start=async()=>{
    try {
        const first=await getText('./content/first.txt')
        const second=await getText('./content/second.txt')
        console.log(first);
    } catch (error) {
        console.log(error);
    }
    
    

}
start();