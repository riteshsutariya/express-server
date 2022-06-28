//using express
const express = require("express");
const app=express();
const port=3001;
let path = './views/';

app.get('/',(req,res)=>{
   res.sendFile(path+'index.html',{root: __dirname});    
})

app.get('/about',(req,res)=>{
    res.sendFile(path+'about.html',{root: __dirname});    
 })

 app.get('/contact',(req,res)=>{
    res.sendFile(path+'contact.html',{root: __dirname});    
 })

 app.get('/about-us',(req,res)=>{
    res.redirect('/about');    
 })
   

app.listen(port,()=>{
    console.log(`app listening on port number ${port}`);
})

//using NodeJs only
/*const http = require('http');
const fs = require('fs');
const port = 3000;
const server = http.createServer((req, res) => {
    let path = './views/';
    res.setHeader('Content-Type', 'text/html');
    res.statusCode = 200;
    switch (req.url) {
        case '/':
            path += 'index.html';
            break;
        case '/about':
            path += 'about.html';
            break;
        case '/contact':
            path += 'contact.html';
            break;
        case '/contact-us':
            res.statusCode=301;
            //redirect 
            res.setHeader('Location','/contact');
            res.end();
            break;
        default:
            path += '404.html';
            break;
    }
    let header='';
    fs.readFile('./views/header.html','utf-8',(err,data)=>{
        if(err)
        {
            res.end('Something Went Wrong');
        }
        else{
            header=data;
        }
    })
    fs.readFile(path, 'utf-8', (err, data) => {
        if (err) {
            res.end('Something Went Wrong!');
        }
        else {
            res.write(header);
            res.end(data);
        }
    })
});

server.listen(port, 'localhost', () => {
    console.log(`server running on port number ${port}`);
})
*/

