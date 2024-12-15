import React from "react";

const Results = ({ results }) => {
  return (
    <div>
      <h2>Resultados</h2>
      <ul>
        {results.map((result, index) => (
          <li key={index}>
            <p>Descarga: {result.downloadSpeed} Mbps</p>
            <p>Carga: {result.uploadSpeed} Mbps</p>
            <p>Latencia: {result.latency} ms</p>
            <p>Fecha: {result.timestamp.toLocaleString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Results;
