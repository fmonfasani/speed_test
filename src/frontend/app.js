import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import SpeedTest from "./components/SpeedTest";
import Results from "./components/Results";

const App = () => {
  const [results, setResults] = useState([]);
  const [downloadSpeed, setDownloadSpeed] = useState(0);
  const [uploadSpeed, setUploadSpeed] = useState(0);
  const [latency, setLatency] = useState(0);

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const response = await fetch("/results");
        const data = await response.json();
        setResults(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchResults();
  }, []);

  const handleSpeedTest = async () => {
    try {
      const response = await fetch("/speedtest");
      const data = await response.json();
      setDownloadSpeed(data.downloadSpeed);
      setUploadSpeed(data.uploadSpeed);
      setLatency(data.latency);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <SpeedTest onSpeedTest={handleSpeedTest} />
      <Results results={results} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
