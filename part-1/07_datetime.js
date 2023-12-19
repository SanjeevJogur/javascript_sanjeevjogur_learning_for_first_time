//@@@@@@@@@@@DATE&TIME@@@@@@@@@@@@@@@

let myDate=new Date()
console.log(myDate.toString());
console.log(myDate.toISOString());
console.log(myDate.toDateString());
console.log(typeof myDate);

let cdate=new Date(2024,1,22)
console.log(cdate.toLocaleString());

let myTimestamp=Date.now()
console.log(myTimestamp);

console.log(cdate.getTime());