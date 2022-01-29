const router = require("express").Router();

router.post("/", async (req, res) => {
  try {
    console.log(req.body);
  } catch (err) {
    res.send(err);
  }
});

module.exports = router;
