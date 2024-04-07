
const decrease_button = document.getElementById("decreaseBT");
const reset_button = document.getElementById("resetBT");
const increase_button = document.getElementById("increaseBT");

let count =0;
const countlabel = document.getElementById("countLabel");

increase_button.onclick = function(){

    count++;
    countlabel.textContent = count;
}

decrease_button.onclick = function(){

    count--;
    countlabel.textContent = count;
}

reset_button.onclick = function(){
    
    count = 0;
    countlabel.textContent = count;
}