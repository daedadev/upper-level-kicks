const router = require("express").Router();
const { User, Sneaker } = require(`../models/`);
const SneaksAPI = require("sneaks-api");
const sneaks = new SneaksAPI();
const cors = require("cors");

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
router.get("/shoe/:user_id", async (req, res) => {
  try {
    const shoes = await Sneaker.findAll({
      where: {
        user_id: req.params.user_id,
      },
    });

    const savedShoes = shoes.map((shoe) => shoe.get({ plain: true }));

    res.send(savedShoes);
    console.log(savedShoes);
  } catch (err) {
    console.log(err);
    res.send(err);
  }
});

// Saving a shoe /api/shoe
router.post("/shoe", async (req, res) => {
  console.log(req.body);
  try {
    Sneaker.create({
      styleID: req.body.styleID,
      name: req.body.name,
      brand: req.body.brand,
      make: req.body.make,
      image: req.body.image,
      user_id: req.body.user_id,
    });

    res.sendStatus(200);
  } catch (err) {
    console.log(err);
    res.send(err);
  }
});

// Deleting a shoe /api/shoe/:user_id?styleID=
router.delete("/shoe/", async (req, res) => {
  console.log(req.body);
  try {
    Sneaker.destroy({
      where: {
        user_id: req.body.user_id,
        styleID: req.body.styleID,
      },
    });

    res.sendStatus(200);
  } catch (err) {
    console.log(err);
    res.send(err);
  }
});

module.exports = router;
