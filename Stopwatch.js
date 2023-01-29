let counter = 0;

let stopWatch; 
   
const startStopWatch = () => {
    stopWatch = setInterval(() => {
        counter += 1
        document.getElementById("myClock").textContent = counter
        }, 1000);
}

const stopStopWatch = () => {
    console.log("You just clicked the stop button");
    clearInterval(stopWatch);
}

const restartStopWatch = () => {
    console.log("You just clicked the restart button");
    document.getElementById("myClock").textContent = "00";
    clearInterval(stopWatch);
}

document.getElementById("start").addEventListener("click", startStopWatch);
document.getElementById("stop").addEventListener("click", stopStopWatch);
document.getElementById("restart").addEventListener("click", restartStopWatch);
    



