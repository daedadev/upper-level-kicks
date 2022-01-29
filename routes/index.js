const router = require("express").Router();
const apiRoutes = require("./apiRoutes");
const loginRoutes = require("./loginRoutes");
const testRoutes = require("./testRoutes");
const tweetRoutes = require("./tweets");

router.use("/api", apiRoutes);
router.use("/log", loginRoutes);
router.use("/test", testRoutes);
router.use("/tweets", tweetRoutes);

module.exports = router;
