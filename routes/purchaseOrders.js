const express = require("express");
const router = express.Router();
const {
getPurchaseOrder
} = require("../controllers/purchaseOrders");

router.get("/purchaseOrders", getPurchaseOrder);

module.exports = router;
