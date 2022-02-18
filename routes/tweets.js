const router = require("express").Router();
const { T } = require("../config/twitConnection");

router.get("/news", async (req, res) => {
  try {
    const options = { screen_name: "SneakerNews", count: 20 };

    T.get("statuses/user_timeline", options, function (err, data) {
      res.send(data);
    });
  } catch (err) {
    res.send(err);
  }
});

module.exports = router;
