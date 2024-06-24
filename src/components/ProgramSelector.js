import React from 'react';
import './ProgramSelector.css'; // Importe o arquivo CSS para os estilos dos botões

function ProgramSelector({ programs, onSelect }) {
  return (
    <div>
      <h2>Selecione um Programa</h2>
      {programs.map((program, index) => (
        <button
          key={index}
          className={`program-button ${getColorClass(index)}`}
          onClick={() => onSelect(index)}
        >
          {program.name}
        </button>
      ))}
    </div>
  );
}

// Função auxiliar para determinar a classe de cor do botão com base no índice
function getColorClass(index) {
  const colors = ['red', 'yellow', 'blue', 'green'];
  return colors[index % colors.length]; // Garante que os botões repitam as cores se houver mais programas do que cores definidas
}

export default ProgramSelector;
