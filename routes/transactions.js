const express = require("express");
const router = express.Router();
const {
     getTransactions,
     getTransactionsByCustomer
} = require("../controllers/transactions");

router.get("/transactions", getTransactions);
router.get("/customers/transactions/:id", getTransactionsByCustomer);

module.exports = router;
