let currentlyPlayingAudio = null;

document.addEventListener("DOMContentLoaded", () => {
  const idiomaGuardado = localStorage.getItem("idioma") || "es";
  const selector = document.getElementById("selectorIdioma");
  if (selector) {
    selector.value = idiomaGuardado;
  }
  cambiarIdioma(idiomaGuardado);
});

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
      audioToPlay.play().catch((error) => {
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
  const elementos = document.querySelectorAll(".texto");
  elementos.forEach((el) => {
    if (el.getAttribute(`data-${lang}`)) {
      el.textContent = el.getAttribute(`data-${lang}`);
    }
  });
  localStorage.setItem("idioma", lang);
}

// Inicializar AOS
  AOS.init({
    once: false,         // se repite cada vez que el elemento entra en pantalla
    duration: 800,       // duración de animación
    offset: 100,         // distancia desde el viewport
    easing: 'ease-in-out'
  });

ScrollReveal().reveal(".sr-card", {
  origin: "bottom",
  distance: "50px",
  duration: 800,
  interval: 150,
  reset: false,
});

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".toggle-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const cardBody = btn.closest(".card-body");
      const shortText = cardBody.querySelector(".short-text");
      const longText = cardBody.querySelector(".long-text");

      const isExpanded = !longText.classList.contains("d-none");

      if (isExpanded) {
        longText.classList.add("d-none");
        shortText.classList.remove("d-none");
        btn.textContent = "Ver más";
      } else {
        longText.classList.remove("d-none");
        shortText.classList.add("d-none");
        btn.textContent = "Ver menos";
      }
    });
  });
});

function verPeligros() {
  window.location.href = "#Riesgos";
}

function verRutaDenuncia() {
  window.location.href = "#Ruta-denuncia";
}

function verConfiguracion() {
  window.location.href = "configuracion-redes.html";
}

document.querySelectorAll(".toggle-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const card = btn.closest(".icon-box");
    const shortText = card.querySelector(".short-text");
    const longText = card.querySelector(".long-text");

    shortText.classList.toggle("d-none");
    longText.classList.toggle("d-none");

    btn.textContent = btn.textContent === "Ver más" ? "Ver menos" : "Ver más";
  });
});







document.addEventListener('click', e => {
  const card = e.target.closest('.flip-card');
  if (!card) return;
  document.querySelectorAll('.flip-card.is-flipped')
    .forEach(c => c !== card && c.classList.remove('is-flipped'));
  card.classList.toggle('is-flipped');
});