const IncBtn = document.getElementById("IncBtn");
 const rtbtn = document.getElementById("rtBtn");
 const DecBtn = document.getElementById("DecBtn");
 const labelBtn = document.getElementById("labelBtn");
 let count = 0;

 IncBtn.onclick = function(){
    console.log("button clicked")
    count++;
    labelBtn.textContent = count;
 }
 rtbtn.onclick = function(){
    count = 0;
    labelBtn.textContent = count;
 }
 DecBtn.onclick = function(){
    count--;
    labelBtn.textContent = count;
 }