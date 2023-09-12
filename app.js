const button= document.querySelector("button")
const body= document.querySelector("body")
const color=['black','red','green','blue','brown']
button.addEventListener("click", ChangeB)
function ChangeB(){

    const colorIndex=parseInt(Math.random()*color.length)
    body.style.backgroundColor=color[colorIndex]

}