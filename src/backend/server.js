const express = require("express");
const app = express();
const port = 3000;
const ResultController = require("./controllers/ResultController");

app.use(express.json());

app.post("/result", ResultController.create);
app.get("/result", ResultController.getAll);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
