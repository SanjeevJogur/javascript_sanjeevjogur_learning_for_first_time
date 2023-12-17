//array
const myarr=[1,2,3,4,5]
const mySub=["DAA","Cloud Computing"]

const myarr2=new Array(5,6,7,8)
console.log(myarr);
console.log(myarr[2]);
console.log(mySub);

//Array methods
myarr.push(6)
console.log(myarr);

myarr.pop()
console.log(myarr);

myarr.unshift(0)
console.log(myarr);

myarr.shift()
console.log(myarr);

console.log(myarr.includes(6));

const arr3=myarr+mySub
console.log(arr3);

// slice and splice

console.log("A",myarr);
const narr=myarr.slice(1,5)

console.log(narr);

console.log("B",myarr);
const narr1=myarr.splice(1,5)

console.log(narr1);


