const express=require('express')
const bodyParser=require('body-parser')
const app=express();
const shortener=require('./shortener')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use('/',express.static(__dirname+"/public"))
app.get('/:shortcode',(req,res)=>{
    let url=shortener.expand(req.param.shortcode)
    res.redirect(url)
})
app.post('/api/v1/shorten',function (req,res) {
    let url=req.body.url
    let shortcode=shortener.shorten(url)
    res.send(shortcode)
})
app.get('/api/v1/expand/:shortcode',function (req,res) {
    
})
app.listen(3232)