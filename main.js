'use strict'

const calculate = function() {
    //calculates the bill
}

const addButton = document.getElementById("addBtn");
    addButton.addEventListener("click", 
        function (e) {
            e.preventDefault();
        })

const resetButton = document.getElementById("resetBtn");
    resetButton.addEventListener("click", 
        function (e){
            e.preventDefault();
        })

function getTip(){
    //calculates the tip
}

function getTotal(){
    //calculates the bill + tip
}

//call this method when you need to round a number so it rounds correctly because of floating points 
function roundCorrectlyPlease(num){
    let prepareToBeRounded = (num * 10).toFixed(20);
    let roundedNum = Math.round(prepareToBeRounded * 10) / 100;
    return roundedNum;
}