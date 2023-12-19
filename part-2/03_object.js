//singleton  by constructor object.create

//object literals

const mysymbol=Symbol("key1")



const user={
    name:"Siddu",
    "Fullname":"Siddu Mashyal",
    age:21,
    location:"Vijayapur",
    [mysymbol]:"AU0321083",
    email:"siddumashyal869@gmail.com",
    isloggedin:false,
    lastlogindays:["mon","sat"]

    


}
console.log(user.email);
console.log(user["Fullname"]);
console.log(user[mysymbol]);

user.email="siddum2@gmail.com"
// Object.freeze(user)
console.log(user);

user.greeting=function(){
    console.log("Hello Siddu Anna");
}
console.log(user.greeting());

user.greetingone=function(){
    console.log(`Hello,${this.name}`);
}
console.log(user.greeting());
console.log(user.greetingone());

 
