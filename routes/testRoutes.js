const router = require("express").Router();
const SneaksAPI = require("sneaks-api");
const sneaks = new SneaksAPI();

router.get("/products", async (req, res) => {
  try {
    sneaks.getProducts("Yeezy Cinder", 10, function (err, products) {
      res.send(products);
    });
  } catch (err) {
    res.send(err);
  }
});

router.get("/prices", async (req, res) => {
  try {
    sneaks.getProductPrices("GX3791", function (err, products) {
      res.send(products);
    });
  } catch (err) {
    res.send(err);
  }
});

module.exports = router;
