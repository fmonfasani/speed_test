document.getElementById("start-test").addEventListener("click", async () => {
  const downloadSpeedEl = document.getElementById("download-speed");
  const uploadSpeedEl = document.getElementById("upload-speed");
  const latencyEl = document.getElementById("latency");

  try {
    // Placeholder for Ookla SDK Initialization
    const speedtest = new Speedtest(); // Ensure you've included the Ookla SDK script

    // Configure the test
    speedtest.setConfiguration({
      servers: [{ id: "1", host: "speedtest.yourserver.com" }],
    });

    speedtest.on("data", (data) => {
      if (data.type === "download") {
        downloadSpeedEl.textContent = data.speed;
      } else if (data.type === "upload") {
        uploadSpeedEl.textContent = data.speed;
      } else if (data.type === "ping") {
        latencyEl.textContent = data.latency;
      }
    });

    speedtest.on("complete", (results) => {
      console.log("Speedtest Complete:", results);
    });

    // Start the test
    speedtest.start();
  } catch (error) {
    console.error("Error running speed test:", error);
  }
});
