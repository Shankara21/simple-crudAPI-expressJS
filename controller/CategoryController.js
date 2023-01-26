const { Category } = require("../models");
const Validator = require("fastest-validator");
const { Op } = require("sequelize");
const v = new Validator();

module.exports = {
  index: async (req, res, next) => {
    try {
      const categories = await Category.findAll({
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
      });
      res.status(200).json(categories);
    } catch (error) {
      next(error);
    }
  },
  store: async (req, res, next) => {
    try {
      const schema = {
        name: "string|required|min:3",
      };
      const validate = v.validate(req.body, schema);
      if (validate.length) {
        return res.status(400).json({
          message: validate,
        });
      }
      const result = await Category.create(req.body);
      res.status(201).json(result);
    } catch (error) {
      next(error);
    }
  },
  show: async (req, res, next) => {
    try {
      const { id } = req.params;
      const result = await Category.findByPk(id, {
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
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
  destroy: async (req, res, next) => {
    try {
      const { id } = req.params;
      const result = await Category.findByPk(id);
      if (!result) {
        return res.status(404).json({
          message: "Data not found",
        });
      }
      await result.destroy();
      res.status(200).json({
        message: "Data has been deleted",
      });
    } catch (error) {
      next(error);
    }
  },
  update: async (req, res, next) => {
    try {
      const { id } = req.params;
      const schema = {
        name: "string|required|min:3",
      };
      const validate = v.validate(req.body, schema);
      if (validate.length) {
        return res.status(400).json({
          message: validate,
        });
      }
      const result = await Category.update(req.body, {
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
  filterByName: async (req, res, next) => {
    try {
      const { name } = req.body;
      const result = await Category.findAll({
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
        where: {
          name: {
            [Op.like]: `%${name}%`,
          },
        },
      });
      res.status(200).json(result);
    } catch (error) {
      next(eror);
    }
  },
};
