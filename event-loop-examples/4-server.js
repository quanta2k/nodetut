const http=require('http')

const server=http.createServer((req,res)=>{
    console.log('request event');
    console.log('Hello World');
})

server.listen(5000,()=>{
    console.log('Server listening to port: 5000....');
})