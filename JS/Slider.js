let slidercont =
document.querySelector(".slider-cont")

let images =
slidercont.querySelectorAll("img")

let index = 1

setInterval(function(){
    let percentage = index * -100
    slidercont.style.transform =
     "translateX(" + percentage + "%)"
     index++
     if(index > (images.length-1)){
        index = 0
     }
},3000)

