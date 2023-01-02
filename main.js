// BTN Event Listener
document.getElementById ("btn").addEventListener("click", btnClicked);

function btnClicked() {
// HTML VAR
let q1 = document.getElementById("q1HTML").value.toLowerCase();
let q2 = document.getElementById("q2HTML").value.toLowerCase();
let q3 = document.getElementById("q3HTML").value.toLowerCase();
let q4 = document.getElementById("q4HTML").value.toLowerCase();

// Global Variables
let numresult = 0;
let numpercent = 0;

// IF Statement

if (q1 == "coal") {
    numresult++;
    numpercent += 25;
result.innerHTML = numresult;
percent.innerHTML = numpercent;
}
if (q2 == "stone") {
    numresult++;
    numpercent += 25;
    result.innerHTML = numresult;
    percent.innerHTML = numpercent;
} 
if (q3 == "iron") {
    numresult++;
    numpercent += 25;
    result.innerHTML = numresult;
    percent.innerHTML = numpercent;
} 
if (q4 == "diamond") {
    numresult++
    numpercent += 25;
    result.innerHTML = numresult;
    percent.innerHTML = numpercent;
}
}
