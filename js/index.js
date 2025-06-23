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
