const counter = document.getElementById("counter");
const increaseBtn = document.getElementById("increaseBtn");
const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");

let count = 0;

function increaseCount() {
    count ++;
    counter.textContent = count;
    
}
increaseBtn.addEventListener("click", increaseCount);

function decreaseCount() {
    count --;
    counter.textContent = count;
    
}
decreaseBtn.addEventListener("click", decreaseCount);


function resetCount() {
    count = 0;
    counter.textContent = count;
    
}
resetBtn.addEventListener("click", resetCount);








