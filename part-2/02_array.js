const IPL=["CSK","RCB","MI","LSG","KKR","SRH","PK","GT","RR","DC"]
const captain=["MSD","Faf","Hardik","KLR","Markaram","Dhawan","Gill","Sanju","R Pant"]
console.log(IPL);
console.log(captain);

// IPL.push(captain)
// console.log(IPL);
// console.log(IPL[10][0]);

// const Teamcaptains=IPL.concat(captain)
// console.log(Teamcaptains);

const Teamcaptains=[...IPL,...captain]
console.log(Teamcaptains);

const arr1=[1,2,3,[4,5,6],7,[8,9,[1,2]]]
console.log(arr1);
const arr2=arr1.flat(2)
console.log(arr2);

console.log(Array.isArray("Virat"));
console.log(Array.from("Virat"));
console.log(Array.from({name:"Virat"}));

s1=95
s2=97
s3=96

console.log(Array.of(s1,s2,s3));
