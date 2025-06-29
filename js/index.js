/*
// Espera a que el DOM esté completamente cargado antes de ejecutar el código
window.addEventListener("DOMContentLoaded", () => {
  // Verifica que la librería LeaderLine esté cargada
  if (typeof LeaderLine === "undefined") {
    console.error("LeaderLine library not loaded.");
    return;
  }

  // Define las conexiones entre las islas por sus IDs
  const conexiones = [
    ["isla1", "isla2"],
    ["isla1", "isla3"],
    ["isla3", "isla4"],
    ["isla3", "isla6"],
    ["isla3", "isla8"],
    ["isla2", "isla6"],
    ["isla4", "isla5"],
    ["isla5", "isla7"],
    ["isla6", "isla7"],
    ["isla8", "isla9"],
    ["isla9", "isla10"],
  ];

  // Recorre cada conexión y dibuja una línea entre los elementos correspondientes
  conexiones.forEach(([origen, destino]) => {
    const origenElem = document.getElementById(origen);
    const destinoElem = document.getElementById(destino);
    if (origenElem && destinoElem) {
      new LeaderLine(
        origenElem,
        destinoElem,
        {
          color: 'brown',      // Color de la línea
          size: 3,             // Grosor de la línea
          path: 'straight',    // Tipo de línea (recta)
          startPlug: 'disc',   // Forma del inicio de la línea
          endPlug: 'arrow3'    // Forma del final de la línea
        }
      );
    }
  });
});
*/

// Function to toggle the visibility of the boat info

function mostrardatosB1() {
  const info = document.querySelector('.info_mapa');
  const barco1 = document.getElementById('barco1');

  if (info && barco1) {
    info.style.display = 'flex';
    info.style.transition = 'opacity 0.5s ease-in-out';
  }
}

function ocultardatosB1() {
  const info = document.querySelector('.info_mapa');
  if (info) {
    info.style.display = 'none';
  }
}


function mostrardatosB2() {
  const info = document.querySelector('.mapa');
  const barco2 = document.getElementById('barco2');

  if (info && barco2) {
    info.style.display = 'flex';
    info.style.transition = 'opacity 0.5s ease-in-out';
  }
}

function ocultardatosB2() {
  const info = document.querySelector('.mapa');
  if (info) {
    info.style.display = 'none';
  }
}
