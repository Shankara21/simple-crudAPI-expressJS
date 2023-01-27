module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", { timestamp: false });
  const Book = sequelize.define("Book", { timestamp: false });
  const Borrow = sequelize.define(
    "Borrow",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      userId: {
        type: DataTypes.INTEGER,
        references: {
          model: {
            tableName: "users",
          },
          key: "id",
        },
      },
      bookId: {
        type: DataTypes.INTEGER,
        references: {
          model: {
            tableName: "books",
          },
          key: "id",
        },
      },
      date: {
        type: DataTypes.DATE,
      },
      lamaPinjam: {
        type: DataTypes.INTEGER,
      },
      description: {
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
      tableName: "borrows",
    }
  );
  Borrow.belongsTo(User);
  Borrow.belongsTo(Book);
  return Borrow;
};
