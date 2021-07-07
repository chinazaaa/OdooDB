const express = require("express");
const auth = require("../middlewares/auth");
const router = express.Router();
const {
  getProducts,
  createProduct,
  getSingleProduct,
  updateProduct,
  deleteProduct,
  getProductCategories,
  getCategories
} = require("../controllers/products");

router.get("/products", getProducts);
router.post("/products", createProduct);
router.get("/products/:id", getSingleProduct);
router.put("/products/:id", updateProduct);
router.delete("/products/:id", deleteProduct);
router.get("/category/products/:id", getProductCategories);
router.get("/categories", auth, getCategories);
module.exports = router;
