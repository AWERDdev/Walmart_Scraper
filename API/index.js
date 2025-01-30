const express = require('express')
const app = express()
const port = process.env.PORT || 3500;
const cors = require('cors')

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.send('welcome to web Scraper API 👍👍')
});
app.get('/FetchURL',(req,res)=>{
    const URL = req.query
    if(!URL){
        res.json({Message:'failed to recive data'})
        console.log(URL)
    }else{
    res.json({Message:'data sent successfuly',URL:URL})
    console.log(URL)
    }
})
app.listen(port,()=>{
    console.log(`Server is running on http://localhost:3500`)
})