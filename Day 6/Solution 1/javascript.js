console.log("Solution 1 Day 6");
let array = ["black", "blue", "yellowgreen", "wheat"];
var i = 0;
function changeColor(){
    let color = array[i++];
    document.body.style.backgroundColor = `${color}`;
}

setInterval(changeColor, 5000)

 






