console.log("Avinash is a Hacker")   //first
console.log("Rohan is a Hecker")     //second

setTimeout(() => {
    console.log("I am inside settimeout")     //baaad main
}, 0);

setTimeout(() => {
    console.log("I am inside settimeout 2")     //baaad main
}, 2000);

console.log("The End")       //third

const fn = () => {
    console.log("nothing")
}

const callback = (arg, fn) => {
    console.log(arg)
    fn()
}



const loadScript = (src , callback) =>{
      let sc = document.createElement("script");
      sc.src = src;
      sc.onload = () => {
          callback("Avinash", fn);
      };
      document.head.append(sc)
}

loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js",callback)

