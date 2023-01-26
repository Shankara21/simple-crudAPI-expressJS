module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define("Category", { timestamp: false });
  const Book = sequelize.define(
    "Book",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      title: {
        type: DataTypes.STRING,
      },
      author: {
        type: DataTypes.STRING,
      },
      categoryId: {
        type: DataTypes.INTEGER,
        references: {
          model: {
            tableName: "categories",
          },
          key: "id",
        },
      },
      publisher: {
        type: DataTypes.STRING,
      },
      description: {
        type: DataTypes.STRING,
      },
      year: {
        type: DataTypes.STRING,
      },
      status: {
        type: DataTypes.STRING,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    },
    {
      tableName: "books",
    }
  );
  Book.belongsTo(Category);
  return Book;
};
