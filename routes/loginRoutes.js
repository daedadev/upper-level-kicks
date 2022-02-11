const router = require("express").Router();
const { User } = require(`../models/`);

router.get("/login", async (req, res) => {
  const user_id = req.body;

  try {
    const userFound = await User.findAll({
      where: {
        user_id: user_id,
      },
    });

    res.send(userFound);
  } catch (err) {
    res.send(err);
  }
});

router.post("/signup", async (req, res) => {
  const user = req.body;

  User.create({
    username: user.username,
    user_id: user.user_id,
  });

  res.send("Finished adding user");
});

module.exports = router;
