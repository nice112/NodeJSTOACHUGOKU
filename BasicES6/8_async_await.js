const f = async() => {
    let promise = new Promise((resolve, reject) => {
        console.log("Loading ...")
    setTimeout (() =>{
        resolve ("done")
    }, 3000)
    
})

let result = await promise // มันจะรอครอบเวลาที่กำหนด
console.log(result)
}
f()