function encryptText() {
    let inputText = document.getElementById("input-text").value;
    if (inputText.trim() !== "") {
        // Si hay texto en el área de entrada
        let outputText = inputText.replace(/[a-z]/g, function (char) {
            return String.fromCharCode(((char.charCodeAt(0) - 97 + 3) % 26) + 97);
        });
        document.getElementById("output-text").value = outputText;

        // Ocultar la imagen y advertencias en la sección de resultado
        let resultSection = document.querySelector(".section:nth-child(2)");
        resultSection.querySelector("img").style.display = "none";
        let warnings = resultSection.querySelectorAll(".warning");
        warnings.forEach(function (warning) {
            warning.style.display = "none";
        });
    } else {
        alert("Ingresa texto en el cuadro de texto primero.");
    }
}

function decryptText() {
    let inputText = document.getElementById("input-text").value;
    if (inputText.trim() !== "") {
        // Si hay texto en el área de entrada
        let outputText = inputText.replace(/[a-z]/g, function (char) {
            return String.fromCharCode(((char.charCodeAt(0) - 97 - 3 + 26) % 26) + 97);
        });
        document.getElementById("output-text").value = outputText;

        // Ocultar la imagen y advertencias en la sección de resultado
        let resultSection = document.querySelector(".section:nth-child(2)");
        resultSection.querySelector("img").style.display = "none";
        let warnings = resultSection.querySelectorAll(".warning");
        warnings.forEach(function (warning) {
            warning.style.display = "none";
        });
    } else {
        alert("Ingresa texto en el cuadro de texto primero.");
    }
}

function copyText() {
    let outputText = document.getElementById("output-text");
    outputText.select();
    document.execCommand("copy");
    alert("Texto copiado: " + outputText.value);
}
