const router = require("express").Router();
const { User, Sneaker } = require(`../models/`);
const SneaksAPI = require("sneaks-api");
const sneaks = new SneaksAPI();

// Return popular shoes /api/popular
router.get("/popular", async (req, res) => {
  try {
    sneaks.getMostPopular(11, function (err, products) {
      res.send(products);
    });
  } catch (err) {
    res.send(err);
  }
});

// Return search results /api/search/{search}
// Also used for random search
router.get("/search/:search", async (req, res) => {
  sneaks.getProducts(req.params.search, 20, function (err, products) {
    if (products !== null) {
      res.send(products);
    }

    if (products === null) {
      console.log(products);
    }
  });
});

// Get specific shoe info /api/product/{style}
router.get("/product/:style", async (req, res) => {
  let search = req.params.style;
  if (req.params.style.includes("+")) {
    var newSearch = search.replace("+", "/");
    search = newSearch;
  }
  sneaks.getProductPrices(search, function (err, products) {
    res.send(products);
  });
});

// Getting a shoe /api/shoe
router.post("/shoe", async (req, res) => {
  const shoe = req.body;

  try {
    Sneaker.create({
      styleID: shoe.styleID,
      name: shoe.name,
      brand: shoe.brand,
      make: shoe.make,
      image: shoe.image,
      user_id: shoe.user_id,
    });

    res.send("Successfully added shoe");
  } catch (err) {
    console.log(err);
    res.send(err);
  }
});

// Saving a shoe /api/shoe
router.post("/shoe", async (req, res) => {
  const shoe = req.body;

  try {
    Sneaker.create({
      styleID: shoe.styleID,
      name: shoe.name,
      brand: shoe.brand,
      make: shoe.make,
      image: shoe.image,
      user_id: shoe.user_id,
    });

    res.send("Successfully added shoe");
  } catch (err) {
    console.log(err);
    res.send(err);
  }
});

module.exports = router;
