window.addEventListener("load", () => {
  const conexiones = [
    ["isla1", "isla2"],
    ["isla1", "isla3"],
    ["isla3", "isla4"],
    ["isla3", "isla6"],
    ["isla2", "isla6"],
    ["isla4", "isla5"],

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
