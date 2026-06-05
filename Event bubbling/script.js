// 
let button = document.getElementById("btn")

button.addEventListener("click", ()=>{
    alert("I was clicked, yayy!")
    document.querySelector(".box").innerHTML="<b>yeaa I was clicked</b> priya is noob"
})
button.addEventListener("dblclick", ()=>{
    alert("don't double click ")
})
button.addEventListener("contextmenu", ()=>{
    alert(" don't right click laldhan is not noob")
})