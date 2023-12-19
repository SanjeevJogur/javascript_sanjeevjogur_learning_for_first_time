// primitive datatypes
// number,string,boolean,null,undefined,bigint,symbol

const marks=90
const name="Sanjeev"
const isLoggedin=true
const temp=null
let department;
const id=Symbol("123")
const Anotherid=Symbol("123")
console.log(id===Anotherid);
const Bigint=123456789n


// reference(non primitive)
// Array,function,objects

const player=["Sachin","Dhoni","Sourav","KOhli"];
let obj={
    name:"Sanjeev Jogur",
    age:21,
    class:"BCA",



}

const myFunction=function(){
    console.log("Hello World");
}
console.log(player);