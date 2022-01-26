const router = require("express").Router();
const SneaksAPI = require("sneaks-api");
const sneaks = new SneaksAPI();

// Return popular shoes /api/popular
router.get("/popular", async (req, res) => {
  try {
    sneaks.getMostPopular(10, function (err, products) {
      res.send(products);
    });
  } catch (err) {
    res.send(err);
  }
});

// Return search results /api/search/{search}
// Also used for random search
router.get("/search/:search", async (req, res) => {
  try {
    sneaks.getProducts(req.params.search, 10, function (err, products) {
      res.send(products);
    });
  } catch (err) {
    res.send(err);
  }
});

// Get specific shoe info /api/product/{style}
router.get("/product/:style", async (req, res) => {
  try {
    sneaks.getProductPrices(req.params.style, function (err, products) {
      res.send(products);
    });
  } catch (err) {
    res.send(err);
  }
});

module.exports = router;
