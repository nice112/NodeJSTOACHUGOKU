// Import
const { application } = require('express')
const express = require ('express')
const  router  = express.Router()
const app=express()

 app.use(express.static('assets'))


//`สร้าง Method
router.get('/',(req,res)=>{
    
     //res.json ({name:'Samit', email:'samit@mail'})
    
       res.render('pages/index.ejs')
    
    })
    
    router.get('/about', (req,res)=>{
       // res.render('<h1>About Page </h1>')
       res.render('pages/about.ejs')
    })
    
    router.post('/submit',(req, res )=>{
            res.send('<h1>submit Success</h1>')
        })
    
        router.put('/update',(req, res )=>{
            res.send('<h1>update Success</h1>')
        })
    
        router.put('/delete',(req, res) =>{
            res.send('<h1>update Success</h1>')
        })
        
        module.exports = router