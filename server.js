const { response } = require('express')
const { request } = require('express')
const express = require('express')
const app = express()
const PORT = 3000

const rappers = {
    '21 savage':{
     'age':29,
    'birthname': 'Sheyaa Bin Abrham',
    'birthLocation': 'London, England',
    },
    'chance the rapper':{
        'age':29,
    'birthname': 'Chanceller Bennet',
    'birthLocation': 'Chicago, illinois',
    },
    'unknown':{
        'age':"Unknown",
    'birthname': 'unknown',
    'birthLocation': 'unknown',
    }
}

app.get('/', (req, res) =>{
    res.sendFile(__dirname, '/index.html')
})

app.get('/api/:name', (req, res)=>{
    const rapperName = req.params.name.toLowerCase()
    if(rappers[rapperName]){
        res.json(rappers[rapperName])
    }else{
        res.json(rappers['unknown'])
    }
    res.json(rappers)
})


app.listen(PORT, ()=> {
    console.log(`The server is now running on port ${PORT}`)
})