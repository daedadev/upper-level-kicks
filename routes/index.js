const router = require("express").Router();
const apiRoutes = require("./apiRoutes");
const loginRoutes = require("./loginRoutes");

router.use("/api", apiRoutes);
router.use("/log", loginRoutes);

module.exports = router;
