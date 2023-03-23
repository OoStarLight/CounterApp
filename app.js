
let counter = document.getElementById("counter")
let count = 0
let saved = document.getElementById("saved")


function increment(){
    count ++
    counter.innerHTML = count
}


function decrement(){
    count --
    counter.innerHTML = count
}

function save(){

    saved.innerHTML = count
    
}

function setToZero(){
    count = 0
    counter.innerHTML = 0
}











































