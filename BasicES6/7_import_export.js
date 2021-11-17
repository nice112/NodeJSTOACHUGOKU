import { sayHi, sayBye }  from './say.js'


import * as say from './say.js'

sayHi ('John')
sayBye ('John')

say.sayHi('samit')
say.sayBye('samit')

// การ inport  จาก  Class ที่เป็นการ 
import User  from './user.js'

// `สร้าง  Object
const obj = new User ('Jonhy')
console.log(obj.name)
obj.sayHi()