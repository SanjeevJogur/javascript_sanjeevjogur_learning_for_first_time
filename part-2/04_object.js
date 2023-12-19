// const IPLauction=new Object()
const IPLauction={}


IPLauction.type="Allrounder"
IPLauction.name="Pat Cummins"
IPLauction.isLoggedIn = false

console.log(IPLauction);

const regular={
    email:"virat18@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Virat",
            lastname:"Kohli"
        }
    }

}
console.log(regular.fullname);

const obj1={70:"Sanjeev",83:"Siddu",10:"Anand"}
const obj2={21:"Ganash",80:"Shrinivas",82:"Sidddarth"}

const obj3={obj1,obj2}
console.log(obj3);

const obj4=Object.assign({},obj1,obj2)
console.log(obj4);

const obj5=Object.assign(obj1,obj2)
console.log(obj5);

const obj6={...obj1,...obj2}
console.log(obj6);

const users=[
{
    id:70,
    email:"sanjeevjour7@gmail.com"
},
{
    id:70,
    email:"sanjeevjour7@gmail.com"
},{
    id:70,
    email:"sanjeevjour7@gmail.com"
},{
    id:70,
    email:"sanjeevjour7@gmail.com"
},{
    id:70,
    email:"sanjeevjour7@gmail.com"
},{
    id:70,
    email:"sanjeevjour7@gmail.com"
},
]
console.log(users[1].email);

console.log(Object.keys(IPLauction));

