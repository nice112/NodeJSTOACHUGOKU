const express = require('express')

const router = express.Router()

router.get('',(req, res)=>{
    res.render('pages/frontend/index', {
         title: 'Dashboard',
        heading:'Dashboard',
        layout:'./layouts/backend'
    })
})

router.get('/about',(req, res)=>{
    res.render('pages/frontend/about', { title: 'About'})
})

module.exports = router