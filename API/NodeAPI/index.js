const express = require('express')
const app = express()
const port = process.env.PORT || 3500;
const cors = require('cors')


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

let urls = [];

app.get('/',(req,res)=>{
    res.send('welcome to web Scraper API 👍👍')
});
app.post('/login',(req,res)=>{
    res.send('I am login Route');
});
app.get('/signup',(req,res)=>{
    res.send('I am signup Route');
});
app.get('/fetchSavedURLS',(req,res)=>{
    const URLS = req.query.URLS
    console.log(URLS)
    urls.push(URLS)
    res.json({Message:'data sent successfuly',URLS:URLS})
});
app.get('/FetchURL',async(req,res)=>{
    try{
        const URL = req.query.value
        if(!URL){
            res.json({Message:'failed to recive data'})
            console.log(URL)
        }else{
        const response = await fetch(` http://127.0.0.1:5000/ScrapeData?url=${encodeURIComponent(URL)}`)
        const data = await response.json()
      
        res.json({Message:'data sent successfuly',URL:URL,Message2:'website Scraped  successfuly',data:data})
        console.log(URL)
        console.log(data)
        }
    }
    catch(error){
        console.log(`failed to fetch data ${error}`)
    }
})

app.listen(port,()=>{
    console.log(`Server is running on http://localhost:3500`)
})