const express = require("express");

//Creo un nuevo objeto router que se utilizará para definir las rutas de la aplicación.
const router = express.Router();

//Importo el módulo categoriesControllers que contiene las funciones para manejar las peticiones HTTP relacionadas con las categorías.
const categoriesControllers = require("../controllers/categories.js");

//Cuando se recibe una petición HTTP con el método POST en esta ruta, se llama a la función createCategory que se encuentra en el módulo categoriesControllers.
router.post("/", categoriesControllers.createCategory);
router.get("/:id", categoriesControllers.getCategoryId);
router.get("/", categoriesControllers.getCategories);

//Exporta el objeto router para que pueda ser utilizado en otras partes de la aplicación.
module.exports = router;
