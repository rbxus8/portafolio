window.addEventListener("load", () => {
  const conexiones = [
    ["isla1", "isla2"],
    ["isla2", "isla3"],
    ["isla3", "isla5"],
    ["isla4", "isla6"],
    ["isla6", "isla7"],
    ["isla8", "isla9"],
    ["isla10", "isla12"]
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
