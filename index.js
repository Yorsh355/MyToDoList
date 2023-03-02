const express = require("express");
const app = express();
const port = 3001;
const cors = require("cors");

const categoriesRoutes = require("./server/routes/categories");

app.use(cors());
app.use(express.json());

app.use("/categories", categoriesRoutes);

app.get("/", async (req, res) => {
  await res.send("Conectado a la base de datos");
});

app.listen(port, () => {
  console.log(`Servidor conectado por el puerto ${port}`);
});
