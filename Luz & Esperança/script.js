const body = document.body;
const root = document.documentElement;

const decreaseFontButton = document.getElementById("decrease-font");
const increaseFontButton = document.getElementById("increase-font");
const contrastButton = document.getElementById("contrast-toggle");
const audioButtons = document.querySelectorAll(".audio-button");
const speechStatus = document.getElementById("speech-status");

let fontSize = 18;

function updateFontSize() {
    fontSize = Math.min(28, Math.max(14, fontSize));
    root.style.setProperty("--font-size", `${fontSize}px`);
}

decreaseFontButton.addEventListener("click", () => {
    fontSize -= 2;
    updateFontSize();
});

increaseFontButton.addEventListener("click", () => {
    fontSize += 2;
    updateFontSize();
});

contrastButton.addEventListener("click", () => {
    const enabled = body.classList.toggle("high-contrast");
    contrastButton.setAttribute("aria-pressed", String(enabled));
    contrastButton.textContent = enabled ? "Contraste normal" : "Alto contraste";
});

function speak(text, title, button) {
    if (!("speechSynthesis" in window)) {
        speechStatus.textContent = "A leitura em voz alta não é compatível com este navegador.";
        return;
    }

    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "pt-BR";
    utterance.rate = 0.92;
    utterance.pitch = 1;

    utterance.onstart = () => {
        button.textContent = "⏹ Parar leitura";
        speechStatus.textContent = `Lendo: ${title}`;
    };

    utterance.onend = () => {
        button.textContent = "🔊 Ouvir mensagem";
        speechStatus.textContent = `Leitura concluída: ${title}`;
    };

    utterance.onerror = () => {
        button.textContent = "🔊 Ouvir mensagem";
        speechStatus.textContent = "Não foi possível reproduzir a leitura.";
    };

    window.speechSynthesis.speak(utterance);
}

audioButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const title = button.dataset.title;
        const text = button.dataset.text;

        if (window.speechSynthesis && window.speechSynthesis.speaking) {
            window.speechSynthesis.cancel();
            button.textContent = "🔊 Ouvir mensagem";
            speechStatus.textContent = "Leitura interrompida.";
            return;
        }

        speak(text, title, button);
    });
});

window.addEventListener("beforeunload", () => {
    if ("speechSynthesis" in window) {
        window.speechSynthesis.cancel();
    }
});
