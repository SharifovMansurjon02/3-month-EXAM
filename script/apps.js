const foodnameEl=document.querySelector("#food-name")
const foodpriceEl=document.querySelector("#food-price")
const foodimgEl=document.querySelector("#food-img")
const foodchefEl=document.querySelector("#food-chef")
const restrnameEl=document.querySelector("#restr-name")
const submitEl=document.querySelector("#submit")
const formEl=document.querySelector("#form")
const menuEl=document.querySelector(".menu__list")
submitEl.addEventListener("click",(e)=>{
    var now = new Date();
    const div = document.createElement('div')
    const divEl=document.createElement("ul")
    e.preventDefault();
    const imgEl=document.createElement("img")
    imgEl.src= foodimgEl.value
    const pEl=document.createElement("li")
    pEl.innerHTML= "<strong>Taom nomi: </strong>"+ (foodnameEl.value).toUpperCase()
    const p1El=document.createElement("li")
    p1El.innerHTML= "<strong>Taom narxi: </strong>"+foodpriceEl.value+"$"
    const p2El=document.createElement("li")
    p2El.innerHTML= "<strong>Taom oshpazi: </strong>"+ (foodchefEl.value).toUpperCase()
    const p3El=document.createElement("li")
    p3El.innerHTML= "<strong>Restoran nomi: </strong>"+ (restrnameEl.value).toUpperCase()
    const btnEl=document.createElement("button")
    btnEl.innerHTML=now.getDate(Number)+"/"+now.getMonth(Number)+"/"+now.getFullYear(Number)+"/ "+now.getHours(Number)+":"+now.getMinutes(Number)
    div.appendChild(imgEl)
    divEl.appendChild(pEl)
    divEl.appendChild(p1El)
    divEl.appendChild(p2El)
    divEl.appendChild(p3El)
div.appendChild(divEl)
div.appendChild(btnEl)
    menuEl.appendChild(div)
   

})
