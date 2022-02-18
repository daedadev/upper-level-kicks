const router = require("express").Router();
const { T } = require("../config/twitConnection");

router.get("/news", async (req, res) => {
  try {
    // const options = { screen_name: "SneakerNews", count: 7 };

    T.get(
      "search/tweets",
      { q: "sneaker since:2022-02-17", count: 20 },
      function (err, data) {
        res.send(data);
      }
    );
  } catch (err) {
    res.send(err);
  }
});

module.exports = router;
