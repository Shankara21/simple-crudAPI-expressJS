const { Book, Category, sequelize } = require("../models");
const Validator = require("fastest-validator");
const v = new Validator();

module.exports = {
  index: async (req, res, next) => {
    try {
      const result = await Book.findAll({
        // group: ["Book.categoryId"],
        attributes: {
          exclude: ["createdAt", "updatedAt", "categoryId", "CategoryId"],
        },
        include: [{ attributes: ["name"], model: Category }],
      });
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  },
  store: async (req, res, next) => {
    try {
      const schema = {
        categoryId: "number|required",
        title: "string|required|min:3",
        author: "string|required|min:3",
        publisher: "string|required|min:3",
        description: "string|required|min:3",
        year: "string|required",
        status: "string|required",
      };
      const validate = v.validate(req.body, schema);
      if (validate.length) {
        return res.status(400).json({
          message: validate,
        });
      }
      const result = await Book.create(req.body);
      res.status(201).json(result);
    } catch (error) {
      next(error);
    }
  },
  filterByStatus: async (req, res, next) => {
    try {
      const { status } = req.params;
      const result = await Book.findAll({
        where: {
          status,
        },
        attributes: {
          exclude: ["createdAt", "updatedAt", "categoryId", "CategoryId"],
        },
        include: [{ attributes: ["name"], model: Category }],
      });
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  },
  countBookByStatus: async (req, res, next) => {
    try {
      const result = await Book.findAll({
        group: ["status"],
        attributes: [
          "status",
          [sequelize.fn("COUNT", sequelize.col("status")), "total"],
        ],
      });
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  },
  show: async (req, res, next) => {
    try {
      const { id } = req.params;
      const result = await Book.findByPk(id, {
        attributes: {
          exclude: ["createdAt", "updatedAt", "categoryId", "CategoryId"],
        },
        include: [{ attributes: ["name"], model: Category }],
      });
      if (!result) {
        return res.status(404).json({
          message: "Data not found",
        });
      }
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  },
  update: async (req, res, next) => {
    try {
      const { id } = req.params;
      const schema = {
        categoryId: "number|required",
        title: "string|required|min:3",
        author: "string|required|min:3",
        publisher: "string|required|min:3",
        description: "string|required|min:3",
        year: "string|required",
        status: "string|required",
      };
      const validate = v.validate(req.body, schema);
      if (validate.length) {
        return res.status(400).json({
          message: validate,
        });
      }
      const result = await Book.update(req.body, {
        where: {
          id,
        },
      });
      if (!result) {
        return res.status(404).json({
          message: "Data not found",
        });
      }
      res.status(200).json({
        message: "Data has been updated",
      });
    } catch (error) {
      next(error);
    }
  },
  destroy: async (req, res, next) => {
    try {
      const { id } = req.params;
      const result = await Book.destroy({
        where: {
          id,
        },
      });
      if (!result) {
        return res.status(404).json({
          message: "Data not found",
        });
      }
      res.status(200).json({
        message: "Data has been deleted",
      });
    } catch (error) {
      next(error);
    }
  },
  countBookByCategory: async (req, res, next) => {
    try {
      const result = await Book.findAll({
        group: ["Book.categoryId"],
        attributes: [
          "Book.categoryId",
          [sequelize.fn("COUNT", sequelize.col("categoryId")), "total"],
        ],
        include: [{ attributes: ["name"], model: Category }],
      });
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  },
};
