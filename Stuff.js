
function Test() {
    window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
    });


}

let modalElement = document.querySelector(".modal");
function Modal() {

 console.log('Test')
    modalElement.classList.add("active");
}

function potato() {

    console.log('Test')
    modalElement.classList.remove("active");
}

setInterval(myTimer, 1000);

function myTimer() {
  const date = new Date();
  document.getElementById("TickTack").innerHTML = date.toLocaleTimeString();
  document.getElementById("Datum").innerHTML = date.toLocaleDateString();
}
 

