window.addEventListener("load", () => {
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

  conexiones.forEach(([origen, destino]) => {
    new LeaderLine(
      document.getElementById(origen),
      document.getElementById(destino),
      {
        color: 'brown',
        size: 3,
        path: 'straight',
        startPlug: 'disc',
        endPlug: 'arrow3'
      }
    );
  });
});

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
