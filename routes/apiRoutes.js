const router = require("express").Router();
const SneaksAPI = require("sneaks-api");
const sneaks = new SneaksAPI();

router.get("/sneaker", async (req, res) => {
  try {
    sneaks.getProductPrices("GX3791", function (err, products) {
      res.send(products);
    });
  } catch (err) {
    res.send(err);
  }
});

module.exports = router;
