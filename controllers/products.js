const odoo = require("../config/odoo");

// /products `GET`
// get all products
const getProducts = async (req, res) => {
  // get `fields` query params e.g /products?fields=name,price
  const fields = req.query.fields ? req.query.fields.split(",") : ["name"];

  console.log(`Fields => ${fields}`);
  try {
    const result = await odoo.searchRead("product.product", undefined, fields);
    return res.status(200).send({
      status: "success",
      message: "Products returned successfully!",
      data: result,
    });
  } catch (error) {
    console.log(`Error occured while processing request: ${error}`);
    return res.status(500).send({ status: "error", message: error.name });
  }
};

// /products `POST`
// create new product
const createProduct = async (req, res) => {
  const { name, type, categ_id, uom_id, uom_po_id } = req.body;
  if (!name || !type || !categ_id || !uom_id || !uom_po_id) {
    return res
      .status(400)
      .send({ status: "error", message: "Missing required body!" });
  }

  try {
    const result = await odoo.create("product.product", {
      name,
      type,
      categ_id,
      uom_id,
      uom_po_id,
    });
    return res.status(201).send({
      status: "success",
      message: `New product with ID: ${result} created successfully!`,
    });
  } catch (error) {
    console.log(`Error occured while processing request: ${error}`);
    return res.status(500).send({ status: "error", message: error.name });
  }
};

// /products/:id `GET`
// get single product by ID
const getSingleProduct = async (req, res) => {
  const id = req.params.id;
  const fields = req.query.fields ? req.query.fields.split(",") : ["name", "categ_id"];
  try {
    const result = await odoo.read("product.product",  [parseInt(id)], fields);
    return res.status(200).send({
      status: "success",
      message: "Product returned successfully!",
      data: result,
    });
  } catch (error) {
    console.log(`Error occured while processing request: ${error}`);
    return res.status(500).send({ status: "error", message: error.name });
  }
};


// get  product categories by ID
const getProductCategories = async (req, res) => {
  const id = req.params.id;
  const fields = req.query.fields ? req.query.fields.split(",") : ["name","categ_id"];
  try {
    const result = await odoo.read('product.category', [parseInt(id)], fields)
    return res.status(200).send({
      status: "success",
      message: "Product Category returned successfully!",
      data: result,
    });
  } catch (error) {
    console.log(`Error occured while processing request: ${error}`);
    return res.status(500).send({ status: "error", message: error.name });
  }
};

// return all category IDs
const getCategories = async (req, res) => {
  // get `fields` query params e.g /products?fields=name,price
  const fields = req.query.fields ? req.query.fields.split(",") : ["categ_id"];

  console.log(`Fields => ${fields}`);
  try {
    const result = await odoo.searchRead("product.category", undefined, fields);
    return res.status(200).send({
      status: "success",
      message: "Products returned successfully!",
      data: result,
    });
  } catch (error) {
    console.log(`Error occured while processing request: ${error}`);
    return res.status(500).send({ status: "error", message: error.name });
  }
};
// /products/:id `DELETE`
// delete a single product
const deleteProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const result = await odoo.delete("product.product", id);

    // checks if `result` returns true
    if (!result) {
      return res
        .status(400)
        .send({ status: error, message: `Unable to update product: ${id}` });
    }

    return res.status(200).send({
      status: "success",
      message: `Product with ID: ${id} deleted successfully!`,
    });
  } catch (error) {
    console.log(`Error occured while processing request: ${error}`);
    return res.status(500).send({ status: "error", message: error.name });
  }
};

// /products/:id `UPDATE`
// updatea single product
const updateProduct = async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  try {
    const result = await odoo.update("product.product", id, body);

    // checks if `result` returns true
    if (!result) {
      return res
        .status(400)
        .send({ status: error, message: `Unable to update product: ${id}` });
    }

    return res.status(200).send({
      status: "success",
      message: `Updated Product: ${id} successfully!`,
    });
  } catch (error) {
    console.log(`Error occured while processing request: ${error}`);
    return res.status(500).send({ status: "error", message: error.name });
  }
};

// best selling products
// const bestSellingProducts = async (req, res) => {
//   // get `fields` query params e.g /products?fields=name,price
//   const fields = req.query.fields ? req.query.fields.split(",") : ["name", "standard_price"] ;
//   console.log(`Fields => ${fields}`);
//   try {
//     const result = await odoo.searchRead("product.product", undefined, fields);
//     return res.status(200).send({
//       status: "success",
//       message: "Products returned successfully!",
//       data: result,
//     });
//   } catch (error) {
//     console.log(`Error occured while processing request: ${error}`);
//     return res.status(500).send({ status: "error", message: error.name });
//   }
// };


module.exports.getProducts = getProducts;
module.exports.createProduct = createProduct;
module.exports.getSingleProduct = getSingleProduct;
module.exports.deleteProduct = deleteProduct;
module.exports.updateProduct = updateProduct;
module.exports.getProductCategories = getProductCategories;
module.exports.getCategories = getCategories;
