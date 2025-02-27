let timeLeft = 300; // 5 minutter
let timer = setInterval(updateTimer, 1000);

// Oppgave 1: Dekode melding (A=1, B=2, C=3 ...)
function checkDecode() {
    let input = document.getElementById("decodeInput").value.toLowerCase();
    if (input === "cat") { // 3-1-20 = CAT
        document.getElementById("challenge1").classList.add("hidden");
        document.getElementById("challenge2").classList.remove("hidden");
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
