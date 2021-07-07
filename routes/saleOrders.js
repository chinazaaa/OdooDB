const express = require("express");
const router = express.Router();
const {
createSaleOrder
} = require("../controllers/saleOrders");

router.post("/saleOrder", createSaleOrder);

module.exports = router;
