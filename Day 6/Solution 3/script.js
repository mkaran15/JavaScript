let attr = document.getElementById('darkbg');
let name = prompt("Enter name.");
const greet = document.getElementById('wel')
greet.innerHTML = `Welcome ${name} to Day 6 Assignment`;
const dmode = document.getElementById('btn');
/*dmode.onclick = function dark(){
    
        document.body.style.backgroundColor = "black";
        document.body.style.color="white
}*/
    
attr.onclick = function dark(){
        if(btn.innerText == "Dark Mode"){
                btn.innerText = "Light Mode"
                attr.classList.remove("white");
                attr.classList.add("black");
        }
        else{
                btn.innerText = "Dark Mode"
                attr.classList.remove("black");
                attr.classList.add("white");
        }
}

