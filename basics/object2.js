const tinderuser={}
tinderuser.name="sammy";
tinderuser.id=7651;
tinderuser.salary=50;
const obj1={
    1:"a",
    2:"b"
}
const obj2={
    3:"a",
    4:"b"
}
//by using assignmet 
const returnobject=Object.assign(obj1,obj2)
// console.log(returnobject)
// console.log(obj1)
//by using spread
const ritya={...obj1,...obj2}
// console.log(ritya)

const users=[
    {
        id:3,
        salary:4000
    },
    {
        id:700,
        salary:8000
    },
    {
        id:4,
        salary:5000
    }

]
// console.log(users)
// console.log(users[0].salary)
console.log(Object.keys(tinderuser))
console.log(Object.values(tinderuser))
console.log(tinderuser.hasOwnProperty('salary'))

const course={
    name:"jshindi",
    price:"998",
    courseinstructor:"satyam"

}
const{courseinstructor}=course
console.log(courseinstructor)
const{courseinstructor:instructor}=course
console.log(instructor)