let now = new Date() 
let before = new Date('December 9, 1991')

let interval = now.getTime() - before.getTime()
interval = Math.floor(interval / (1000 * 60 * 60 * 24))

console.log(`태어나고 ${interval}일 지났습니다.`)