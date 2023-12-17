const name="Sanjeev"
const rollno=70

console.log(name+ rollno+ " ASPBCA");
console.log(` My name is ${name} and rollno is ${rollno}`);
const myname= new String('Sanjeev Jogur')
console.log(myname[0]);

console.log(myname.__proto__);
console.log(myname.length);
console.log(myname.toLowerCase());
console.log(myname.charAt(5));
console.log(myname.indexOf('v'));

const subname=myname.substring(0,9)
console.log(subname);
const name1="    Sanjeev    "
console.log(name1);
console.log(name1.trim());

const gmail="sanjeevjogur@7gmail.com"
console.log(gmail.replace('@7','@2'));
console.log(gmail.includes('siddu'));

const special="Sanjeev-Jogur-BCA"
console.log(special.split('-'));
