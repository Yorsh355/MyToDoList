const express = require("express");
const cors = require("cors");
const app = express();
const port = 3001;

//Importo el archivo de rutas de categories
const categoriesRoutes = require("./server/routes/categories");

//Permite que el servidor acepte consultas de diferentes origenes
app.use(cors());

//Este middleware se utiliza para analizar las solicitudes entrantes con formato JSON y convertirlas en objetos JavaScript que se puedan utilizar en el servidor.
app.use(express.json());

//Esta línea indica que la ruta "/categories" utilizará el archivo de rutas categoriesRoutes
app.use("/categories", categoriesRoutes);

//Esta línea establece una ruta principal "/"
app.get("/", async (req, res) => {
  await res.send("Conectado a la base de datos");
});

//Esta línea inicia el servidor express
app.listen(port, () => {
  console.log(`Servidor conectado por el puerto ${port}`);
});
