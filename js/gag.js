let getEl = x =>document.querySelector(x)
function getDiv (){
    for(let i=0; i<=50; i++){
        console.log(i)
        const item=document.createElement('div')
        item.classList.add('abc')
        item.style.backgroundColor=randomColor()
        item.style.border='2px solid grey'
        item.style.borderRadius='5px'
        item.style.width='50px'
        item.style.height='50px'
        document.querySelector('.letColors').append(item)
    }
}
getDiv()
function randomColor(){
    const r= Math.floor(Math.random()*255);
    const g= Math.floor(Math.random()*255);
    const b= Math.floor(Math.random()*255);
    const col = `rgb(${r}, ${g}, ${b})`
    return col
}
const abc = getEl('.letColors')
const abcc=getEl('.abc')

abc.addEventListener('click', wego)

let text = getEl('p')

function wego(event){
    if(event.target === event.currentTarget){
        console.log('abc')
        return
    }
console.log(event.target.style.backgroundColor)
text.textContent = event.target.style.backgroundColor
}
