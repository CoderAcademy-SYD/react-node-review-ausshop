const express = require("express");
const router = express.Router();
const authRoutes = require("./auth_routes");
const productRoutes = require("./product_routes");

router.use("/auth", authRoutes);
router.use("/products", productRoutes);

module.exports = router;