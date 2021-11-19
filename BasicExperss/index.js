// im
const express = require ('express')

//

const urlRouter = require ('./router/url')

const app = express()
app.use(express.static('assets'))

//เรียกใช้งาน
app.use('',urlRouter)

// Run
app.listen(3000,()=>{
console.log('Server run at port 3000')

}) 