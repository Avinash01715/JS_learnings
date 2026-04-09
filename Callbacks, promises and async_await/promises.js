console.log("This is Promises");

let prom1 = new Promise((resolve, reject) => {
  let a = Math.random();
  if (a < 0.5) {
    reject("No random number was not supporting");
  } else {
    setTimeout(() => {
      console.log("yess I am done");
      resolve("Avinash");
    }, 3000);
  }
});

prom1.then((a) => {
  console.log(a);
}).catch((err)=>{
    console.log(err)
});



