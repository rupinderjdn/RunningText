const textEl = document.getElementById('text')
const speedEl = document.getElementById('speed')

const text = "Welcome to my Github Profile!"
let id=0;
let time=500/speed.value
showText()
function showText(){
    textEl.innerText = text.slice(0,id);
    id++;
    if(id>text.length){
        id=1;
    }
    setTimeout(showText,time)
}
speedEl.addEventListener("input",(e)=>time=500/e.target.value)
