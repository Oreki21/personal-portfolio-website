const hamburger = document.getElementById("hamburger-icon")
const offScreenMenu = document.getElementById("off-screen-menu")

hamburger.addEventListener("click", () =>{
    offScreenMenu.classList.toggle("active")
})

function setBreakPoint(){
    let span = document.getElementById("break-point");
    let br = document.createElement("br")
    span.innerHTML = "";
    if (window.innerWidth < 768){
        span.appendChild(br);   
    }
}

window.addEventListener("resize", setBreakPoint);
setBreakPoint();

document.getElementById("year").textContent = new Date().getFullYear();
