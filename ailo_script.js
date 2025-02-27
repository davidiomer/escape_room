// Spørsmålene og svarene
const questions = [
    { question: "Hilket år ble premier league grunnlagt?", answer: "1992", theme: "Fotball" },
    { question: "Hvem vant gullballen i 2007?", answer: "Kaka", theme: "Fotball" },
    { question: "Hvem har flest målpoeng i premier league denne sesongen?", answer: "Mohammed Salah", theme: "Fotball" },
    { question: "Hvem er tidenes beste fotballspiller?", answer: "Lionel Messi", theme: "Fotball" },
    { question: "Hvilket fagbrev tok Tarald?", answer: "Energimontør", theme: " Kuben History" },
    { question: "Hvilket lacrosse lag spiller Tale Futtrup Solfjeld på?, nåværende lag.", answer: "Oslo Lacrosse", theme: "Kuben History" },
    { question: "Hvor mange premier league har Leicester City?", answer: "1", theme: "Fotball" },
    { question: "hvem har vunnet gullballen flest ganger?", answer: "Lionel Messi", theme: "Fotball" },
    { question: "Hva er det største planeten i solsystemet?", answer: "Jupiter", theme: "Geografi" },
    { question: "Hva er 16 delt på 2?", answer: "8", theme: "Matematikk" },
    { question: "Hva er det høyeste fjellet i verden?", answer: "Mount Everest", theme: "Geografi" },
    { question: "Hva heter verdens største hav?", answer: "Stillehavet", theme: "Geografi" },
    { question: "Hva er 9 x 9?", answer: "81", theme: "Matematikk" },
    { question: "Hva er det mest folkerike landet i verden?", answer: "Kina", theme: "Geografi" },
    { question: "Hva er 2 til 3. potens (2^3)?", answer: "8", theme: "Matematikk" },
    { question: "Hva er hovedstaden i Australia?", answer: "Canberra", theme: "Geografi" },
    { question: "Hvilket år ble Berlinmuren revet?", answer: "1989", theme: "Historie" }
];

let currentQuestion = 0;  // Holder styr på hvilken spørsmål vi er på
let progress = 0;  // Fremdriften i spillet

// Funksjon for å oppdatere spørsmål og sjekke svar
function checkAnswer() {
    let userAnswer = document.getElementById("answer").value;
    let resultText = document.getElementById("result");

    if (userAnswer === questions[currentQuestion].answer) {
        resultText.innerHTML = "Riktig!";
        progress += 16.6; // Oppdaterer fremdrift etter hvert riktige svar
        document.getElementById("progress-bar").style.width = `${progress}%`;

        currentQuestion++;  // Gå til neste spørsmål
        if (currentQuestion < questions.length) {
            setTimeout(loadNextQuestion, 1000);
        } else {
            setTimeout(() => alert("Gratulerer! Du har fullført Escape Room!"), 1000);
        }
    } else {
        resultText.innerHTML = "Feil, prøv igjen!";
    }

    document.getElementById("answer").value = ""; // Tømmer inputfeltet
}

// Funksjon for å laste neste spørsmål
function loadNextQuestion() {
    document.getElementById("question").innerHTML = questions[currentQuestion].question;
    document.getElementById("result").innerHTML = "";
}

// Initialiser første spørsmål
loadNextQuestion();