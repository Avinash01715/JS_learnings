const callback = (arg) => {
    console.log(arg)
}


const loadScript = (src , callback) =>{
      let sc = document.createElement("script");
      sc.src = src;
      sc.onload =  callback ("Avinash");
      document.head.append(sc)
}

loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js",(arg, fn)=> {
    fn("firstarg",() => {
        fn2("secondarg",()=>{
            
        })
    })
})
