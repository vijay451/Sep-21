const container= document.querySelector(".container");
const seats = document.querySelectorAll(".row seat:not(.occupied)");
const count=document.querySelector("#count");
const movie=document.querySelector("#movie");
const total=document.querySelector('#total');
container.addEventListener("click",(e)=>{
    if(e.target.classList.contains("seat")&&!e.target.classList.contains('occupied')){
        e.target.classList.toggle('selected')
    }

updateCountAndPrice();

});

movie.addEventListener('change',(e)=>{
    updateCountAndPrice();
})
function updateCountAndPrice() {
    const seatSelected=document.querySelectorAll(".row .seat.selected");
    const ticketAmount=movie.value;
    count.innerHTML= seatSelected.length;
    total.innerHTML= ticketAmount*seatSelected.length;
}