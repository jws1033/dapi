var express = require('express')
var path =require('path')
var bodyParse = require('body-parser')
var apiRouter = require('./routes/apiRouter')
var app = express()

app.set('views',path.join(__dirname+'/views'))
app.set('view engine' , 'ejs')


app.use(bodyParse.json())
app.use(bodyParse.urlencoded({extended:false}))

app.use('/api', apiRouter)
app.use('/', (req , res)=>{
    res.send("hellow")
})
// get 방식으로 라우팅 처리
// app.get('/', function(request,response){
//     console.log(request)
//     response.render('index')
// })
// listen(포트 , url , backlog , callback)
app.listen(8080, function(){
    console.log("server is Starting at http://localhost:8080")
})
