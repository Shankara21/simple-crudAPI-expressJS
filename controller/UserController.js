const { User } = require("../models");
const Validator = require("fastest-validator");
const v = new Validator();

const index = async (req, res, next) => {
  try {
    const result = await User.findAll({
      attributes: {
        exclude: ["password", "createdAt", "updatedAt"],
      },
    });
    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const store = async (req, res, next) => {
  try {
    const schema = {
      userName: "string|required|min:3|unique:users,userName",
      fullName: "string|required|min:3",
      email: "string|required|email|unique:users,email",
      password: "string|required|min:6",
      phone: "string|required|min:10",
      gender: "string",
    };
    const validate = v.validate(req.body, schema);
    if (validate.length) {
      return res.status(400).json({
        message: validate,
      });
    }
    const result = await User.create(req.body);
    res.status(201).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
const show = async (req, res, next) => {
  try {
    const { id } = req.params;
      const result = await User.findByPk(id, {
        attributes: {
          exclude: ["password", "createdAt", "updatedAt"],
        },
      });
    if (!result) {
      return res.status(404).json({
        message: "Data not found",
      });
    }
    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
const destroy = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await User.findByPk(id);
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
};
const update = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await User.findByPk(id);
    if (!result) {
      return res.status(404).json({
        message: "Data not found",
      });
    }
    const schema = {
      userName: "string|min:3|unique:users,userName",
      fullName: "string|min:3",
      email: "string|email|unique:users,email",
      phone: "string|min:10",
      gender: "string",
    };
    const validate = v.validate(req.body, schema);
    if (validate.length) {
      return res.status(400).json({
        message: validate,
      });
    }
    await result.update(req.body);
    res.status(200).json({
      message: "Data has been updated",
    });
  } catch (error) {
    next(error);
  }
};
const filterByGender = async (req, res, next) => {
  try {
    const result = await User.findAll({
      where: {
        gender: req.body.gender,
      },
      attributes: {
        exclude: ["password", "createdAt", "updatedAt"],
      },
    });
    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
module.exports = {
  index,
  store,
  show,
  destroy,
  update,
  filterByGender,
};
