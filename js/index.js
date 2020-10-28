//Stopping links from working

Array.from(document.links).forEach(link => {
    link.addEventListener('click', event =>{
        event.preventDefault();
    })});

//Using mouseenter and mouseleave - enter navigation header and change color going in, and reset when leaving
const navHeader = document.querySelector(".main-navigation");
navHeader.addEventListener('mouseenter', event => {
    event.target.style.backgroundColor = "cadetblue";
})
navHeader.addEventListener('mouseleave', event => {
    event.target.style.backgroundColor = null;
})

//Using mouseover and mouseout - change color when over nav links
navHeader.querySelectorAll("a").forEach((item) => {
    item.addEventListener("mouseenter", (event) => {
    event.target.style.color = "orange";
    });
});

navHeader.querySelectorAll("a").forEach(item =>{
    item.addEventListener("mouseout", event =>{
        event.target.style.color = null;
    })
})

//❗❗Using space keydown to not scroll down but have it randomize the background color instead

function randColor () {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r},${g},${b})`
}

document.addEventListener("keydown", event => {
    if (event.code === 'Space') {
        event.preventDefault();
        console.log(document.querySelector(".container.home"));
        document.querySelector(".container.home").style.backgroundColor = randColor();
        debugger;
    }
});

//❗Using Wheel to zoom in/out on image hovered over

document.querySelectorAll("img").forEach(pic =>
    pic.addEventListener("wheel", event => {
    event.preventDefault();
    let scale = 1;
    scale += event.deltaY * -0.01;

  // Restrict scale
  scale = Math.min(Math.max(.125, scale), 4);

  // Apply scale transform
  event.target.style.transform = `scale(${scale})`;
}));

//❗❗❗Using load
window.addEventListener("load",function(){
    alert("Welcome to this page! Try out these fun things!\nHit or Hold the space-bar\nScroll over an image!");
})

