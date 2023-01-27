const { Borrow, User, Book, Category } = require("../models");
module.exports = {
  index: async (req, res, next) => {
    try {
      const result = await Borrow.findAll({
        attributes: {
          exclude: [
            "createdAt",
            "updatedAt",
            "userId",
            "bookId",
            "UserId",
            "BookId",
          ],
        },
        include: [
          { attributes: ["userName"], model: User },
          {
            attributes: {
              exclude: ["createdAt", "updatedAt", "CategoryId"],
            },
            model: Book,
            include: [
              {
                attributes: {
                  exclude: ["createdAt", "updatedAt", "categoryId"],
                },
                model: Category,
              },
            ],
          },
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
      const result = await Borrow.findByPk(id, {
        attributes: {
          exclude: [
            "createdAt",
            "updatedAt",
            "userId",
            "bookId",
            "UserId",
            "BookId",
          ],
        },
        include: [
          { attributes: ["userName"], model: User },
          {
            attributes: {
              exclude: ["createdAt", "updatedAt", "CategoryId"],
            },
            model: Book,
            include: [
              {
                attributes: {
                  exclude: ["createdAt", "updatedAt", "categoryId"],
                },
                model: Category,
              },
            ],
          },
        ],
      });
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  },
};
