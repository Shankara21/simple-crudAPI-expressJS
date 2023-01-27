module.exports = (sequelize, DataTypes) => {
  const Borrow = sequelize.define("Borrow", { timestamps: false });
  const User = sequelize.define("User", {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    userName: {
      type: DataTypes.STRING,
      unique: true,
    },
    fullName: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
      isEmail: true,
      unique: true,
    },
    gender: {
      type: DataTypes.STRING,
    },
    phone: {
      type: DataTypes.STRING,
      isNumeric: true,
    },
    password: {
      type: DataTypes.STRING,
      is: /^[0-9a-f]{64}$/i,
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
  });
  User.hasMany(Borrow);
  return User;
};
