const User = require("./user");
const Comment = require("./comment");
const Sneaker = require("./sneaker");

Comment.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Sneaker.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

User.hasMany(Comment, Sneaker, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

module.exports = { User, Sneaker, Comment };
