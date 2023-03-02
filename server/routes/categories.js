const express = require("express");
const router = express.Router();

const categoriesControllers = require("../controllers/categories.js");

router.post("/", categoriesControllers.createCategory);
router.get("/", categoriesControllers.getCategories);

module.exports = router;
