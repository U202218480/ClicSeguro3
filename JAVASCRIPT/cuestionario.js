let yesCount = 0;
let noCount = 0;

// Función que se llama cuando el usuario responde
function nextQuestion(questionNumber, answer) {
  if (answer === "Sí") {
    yesCount++;
  } else {
    noCount++;
  }

  // Ocultar todas las preguntas
  const questions = document.querySelectorAll(".question-container");
  questions.forEach((q) => (q.style.display = "none"));

  // Mostrar la siguiente pregunta según el número
  const nextQuestion = document.getElementById("question" + questionNumber);
  if (nextQuestion) {
    nextQuestion.style.display = "block";
  }

  // Si es la última pregunta (por ejemplo, la 15), mostrar la pantalla de agradecimiento
  if (questionNumber === 16) {
    showThanks();
  }
}

// Función para mostrar la pantalla final de agradecimiento con el overlay
function showThanks() {
    const overlay = document.getElementById('overlay');
    const overlayMessage = document.getElementById('overlayMessage');
    const riskLevel = document.getElementById('riskLevel');
    const riskMessage = document.getElementById('riskMessage');

    // Cambiar los estilos y los mensajes dependiendo del número de respuestas "Sí"
    if (yesCount >= 11 && yesCount <= 16) {
        overlay.classList.add('red-overlay');
        riskImage.src = "Imagenes/rojo.webp";
        riskLevel.innerHTML = "Riesgo Alto";  // Mensaje de riesgo alto
        riskMessage.innerHTML = "Tu situación presenta un alto riesgo. Has recibido mensajes inapropiados o manipulativos que podrían ser un intento de grooming. Te recomendamos pedir ayuda y responder el cuestionario adicional.";
    } else if (yesCount >= 6 && yesCount <= 10) {
        overlay.classList.add('yellow-overlay');
        riskImage.src = "Imagenes/ambar.webp";
        riskLevel.innerHTML = "Riesgo Moderado";  // Mensaje de riesgo moderado
        riskMessage.innerHTML = "Precaución. Considera tomar medidas. Es posible que tu situación necesite atención.";
    } else if (yesCount <= 5) {
        overlay.classList.add('green-overlay');
        riskImage.src = "Imagenes/verde1.webp";
        riskLevel.innerHTML = "Riesgo Bajo";  // Mensaje de riesgo bajo
        riskMessage.innerHTML = "¡Bien! Estás tomando buenas decisiones. Sigue así.";
    }

    overlay.style.display = 'flex';  // Mostrar el overlay
}

// Función para cerrar el overlay y continuar con la encuesta
function closeOverlay() {
    const overlay = document.getElementById('overlay');
    overlay.style.display = 'none';  // Ocultar el overlay

    // Si deseas seguir mostrando la pantalla final de agradecimiento
    document.getElementById('thanksMessage').style.display = 'block';
}

// Función para finalizar la encuesta y redirigir al inicio
function endSurvey() {
    window.location.href = "index.html";  // Redirige a la página de inicio
}
 let currentlyPlayingAudio = null;

    function playAudio(audioId) {
        const audioToPlay = document.getElementById(audioId);

        if (audioToPlay) {
            // Si hay un audio reproduciéndose y no es el mismo que queremos reproducir, lo pausamos
            if (currentlyPlayingAudio && currentlyPlayingAudio !== audioToPlay) {
                currentlyPlayingAudio.pause();
                currentlyPlayingAudio.currentTime = 0; // Opcional: Reinicia el audio pausado al principio
            }

            // Si el audio que queremos reproducir ya está sonando, lo pausamos.
            // Si está pausado, lo reproducimos.
            if (audioToPlay.paused) {
                audioToPlay.play().catch(error => {
                    console.error("Error al reproducir el audio:", error);
                    // Esto a menudo ocurre debido a las políticas de reproducción automática del navegador.
                });
                currentlyPlayingAudio = audioToPlay; // Establece este audio como el que se está reproduciendo
            } else {
                audioToPlay.pause();
                audioToPlay.currentTime = 0; // Opcional: Reinicia el audio al pausarlo
                currentlyPlayingAudio = null; // No hay ningún audio reproduciéndose
            }
        } else {
            console.error("No se encontró el elemento de audio con el ID:", audioId);
        }
    }

    function cambiarIdioma(lang) {
      const elementos = document.querySelectorAll('.texto');
      elementos.forEach(el => {
        if (el.getAttribute(`data-${lang}`)) {
          el.textContent = el.getAttribute(`data-${lang}`);
        }
      });
      localStorage.setItem("idioma", lang);
    }

    document.addEventListener("DOMContentLoaded", () => {
      const idiomaGuardado = localStorage.getItem("idioma") || "es";
      const selector = document.getElementById("selectorIdioma");
      if (selector) {
        selector.value = idiomaGuardado;
      }
      cambiarIdioma(idiomaGuardado);
    });


    function verEstadistica() {
  window.location.href = "#Riesgos";
}

    // Inicializar AOS
AOS.init({
  duration: 1000,
  once: true
});


