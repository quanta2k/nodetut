const {readFile, writeFile}= require('fs').promises
const util=require('util')
const readFilePromise=util.promisify(readFile)
const writeFilePromise=util.promisify(writeFile)

// getText('./content/first.txt')
//     .then((result)=>console.log(result))
//     .then((err)=>console.log(err))

const start=async()=>{
    try {
        const first=await readFile('./content/first.txt','utf-8')
        const second=await readFile('./content/second.txt','utf-8')
        await writeFilePromise('./content/result-mind-grenade.txt', `THIS IS AWESOME : ${first} ${second}` ,{flag:'a'})
        console.log(first,second);
    } catch (error) {
        console.log(error);
    }
    
    

}
start();