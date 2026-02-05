let mydate=new Date();
console.log(mydate.toDateString())
console.log(mydate.toString())
console.log(mydate.toLocaleString())
console.log(typeof mydate)

let mycreate=new Date(2020,0,6)
console.log(mycreate)
let mycreated=new Date("1-14-2020")
console.log(mycreated.toLocaleDateString())
console.log(mycreated.toDateString())

let mytimestamp=Date.now();
console.log(mytimestamp)
console.log(mycreated.getTime())
console.log(Date)