const router = require("express").Router();
const apiRoutes = require("./apiRoutes");
const loginRoutes = require("./loginRoutes");
const testRoutes = require("./testRoutes");

router.use("/api", apiRoutes);
router.use("/log", loginRoutes);
router.use("/test", testRoutes);

module.exports = router;
