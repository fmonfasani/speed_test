const Result = require("../models/results");

exports.create = async (req, res) => {
  try {
    const result = new Result(req.body);
    await result.save();
    res.send({ message: "Resultado guardado con éxito" });
  } catch (error) {
    res.status(500).send({ message: "Error al guardar el resultado" });
  }
};

exports.getAll = async (req, res) => {
  try {
    const results = await Result.find().sort({ timestamp: -1 });
    res.json(results);
  } catch (error) {
    res.status(500).send({ message: "Error al obtener los resultados" });
  }
};
