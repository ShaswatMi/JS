let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleDateString());
// console.log(typeof myDate);

let mycreatedDate =new Date(2023, 0, 23, 5, 3)
// console.log(mycreatedDate.toString());
// console.log(mycreatedDate.toLocaleString());

let mycreateddateone=new Date("2023-01-02")
let mycreateddateonee=new Date("01-01-2023")
// console.log(mycreateddateonee.toLocaleString());

//timestamps
let myTimestamp =Date.now()
// console.log(myTimestamp);
// console.log(mycreateddateonee.getTime());
console.log(Math.floor(Date.now()/1000));  //to comvert to seconds

let newDate =new Date();
console.log(newDate.getDate());
console.log(newDate.getDay());

let date=newDate.toLocaleString('default',{
    weekday: "short",
})
console.log(date);




