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

//Using mouseover and mouseoff - change color when over nav links
navHeader.querySelectorAll("a").forEach((item) => {
    item.addEventListener("mouseover", (event) => {
    event.target.style.color = "orange";
    });
});

