const f = async() => {
    let promise = new Promise((resolve, reject) => {
        console.log("กำลังโหลดข้อมูล ...")
    setTimeout (() =>{
        resolve ("done")
    }, 3000)
    
})

let result = await promise // มันจะรอครอบเวลาที่กำหนด
console.log(result)
}
f()