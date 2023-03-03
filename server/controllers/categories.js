const pool = require("../config/db");

module.exports = {
  createCategory: async (req, res) => {
    try {
      const { name, image } = req.body;

      const category = await pool.query(
        `SELECT * FROM categories WHERE name = '${name}'`
      );

      category.rowCount > 0
        ? res.send("Categoria ya existe")
        : await pool.query(
            `INSERT INTO categories (name, image) VALUES ('${name}', '${image}')`
          );

      return res.send("Categoria creada exitosamente");
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  getCategoryId: async (req, res) => {
    try {
      const { id } = req.params;
      const category = await pool.query(
        `SELECT * FROM categories WHERE id_categories = ${id} `
      );

      category.rows.length > 0
        ? res.json(category.rows)
        : res.status(404).json({ error: "Categoria no encontrada" });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  getCategories: async (req, res) => {
    try {
      const category = await pool.query(`SELECT * FROM categories`);
      res.json(category);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: err.message });
    }
  },
};
