const pool = require("../config/db");

module.exports = {
  createCategory: async (req, res) => {
    try {
      const { name, image } = req.body;
      const category = await pool.query(
        `SELECT * FROM categories WHERE name = '${name}'`
      );
      if (category.rowCount > 0) {
        return res.send("La categoría ya existe");
      }

      await pool.query(
        `INSERT INTO categories (name, image) VALUES ('${name}', '${image}')`
      );

      return res.send("Categoría creada exitosamente");
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: err.message });
    }
  },

  getCategories: async (req, res) => {
    try {
      const category = await pool.query(`SELECT * FROM categories`);
      return res.json(category);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: err.message });
    }
  },
};
