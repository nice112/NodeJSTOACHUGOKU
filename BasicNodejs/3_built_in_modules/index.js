// Node.js Built-in modules
//1. file system (fs)
//2 Path (Path)
//3 operating
//4Evenst
//5 HTTp

//Path
const path = require ('path')

console.log(path.basename(__filename))
console.log(path.dirname(__filename))
console.log(path.extname(__filename))
console.log(path.parse(__filename))

// File System (fs)
const fs = require ('fs')

// write file 
fs.writeFileSync(path.join(__dirname,'data.txt'), 'Hello Node Js')

// Read file 
console.log(fs.readFileSync(path.join(__dirname, 'data.txt'),'utf8'))


// operating system (os)
const os= require ('os')

console.log(os.cpus())
console.log(os.hostname())
console.log(os.homedir())
console.log(os.uptime())
console.log(os.platform())
console.log(os.release())
console.log(os.arch())
console.log(os.type())
console.log(os.loadavg())
console.log(os.networkInterfaces())
console.log(os.networkInterfaces()['Wi-Fi'][1].address)

