let timeLeft = 300; // 5 minutter
let timer = setInterval(updateTimer, 1000);
let ans1 = false
let ans2 = false
let ans3 = false

// Oppgave 1: Dekode melding (A=1, B=2, C=3 ...)
function checkDecode() {
    let input = document.getElementById("decodeInput").value.toLowerCase();
    if (input === "cat") { // 3-1-20 = CAT
        document.getElementById("challenge1").classList.add("hidden");
        document.getElementById("challenge2").classList.remove("hidden");
        alert("wow you got it")
        ans1 = true
        show ()
        
    } else {
        alert("Feil! Prøv igjen.");
    }
}

// Oppgave 2: Logisk gåte
function checkLogic() {
    let answer = document.getElementById("logicAnswer").value.toLowerCase();
    if (answer.includes("mor") || answer.includes("moren")) {
        document.getElementById("challenge2").classList.add("hidden");
        document.getElementById("challenge3").classList.remove("hidden");
        alert("wow you got it")
        ans2 = true
        show ()
    } else {
        alert("Feil! Tenk logisk.");
    }
}

// Oppgave 3: Knekk låskoden
function checkLock() {
    let lock = document.getElementById("lockCode").value;
    if (lock === "531") {
        document.getElementById("challenge3").classList.add("hidden");
        document.getElementById("winMessage").classList.remove("hidden");
        clearInterval(timer); // Stopper timeren
        alert("wow you got it")
        ans3 = true
        show ()
    } else {
        alert("Feil kode! Prøv igjen.");
    }
}

// Timer-funksjon
function updateTimer() {
    timeLeft--;
    document.getElementById("time").textContent = timeLeft;

    if (timeLeft <= 0) {
        clearInterval(timer);
        alert("Tiden er ute! Du tapte 😔");
        location.reload(); // Restarter spillet
    }
}

if (ans1 === false && ans2 === false &&  ans3 === false){
    document.getElementsByClassName("komut")[0].style.display = "none"
} 
function show (){
    if (ans1 === true && ans2 === true &&  ans3 === true) {
        document.getElementsByClassName("komut")[0].style.display = "block"
    }
}

