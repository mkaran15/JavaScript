let number = prompt("Enter a number","1");

const list = document.querySelector("#list");
for(let i = 1; i<=10 ;i++)
{
    list.innerText += `${number} X ${i} = ${number * i}\n` ;
    
}