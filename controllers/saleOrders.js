// create new sale order
const createSaleOrder= async (req, res) => {
    const { order_id, product_id, product_uom_qty, price_unit} = req.body;
    if (!order_id || !product_id || !product_uom_qty || !price_unit) {
      return res
        .status(400)
        .send({ status: "error", message: "Missing required body!" });
    }
  
    try {
      const result1 = await odoo.create("sale.order", {
        order_id, 
        product_id, 
        product_uom_qty, 
        price_unit,
      });
      const result2 = await odoo.create("sale.order.line", {
      });
      return res.status(201).send({
        status: "success",
        message: `New Sale Order ${result1} created with ID: ${result2} created successfully!`,
      });
    } catch (error) {
      console.log(`Error occured while processing request: ${error}`);
      return res.status(500).send({ status: "error", message: error.name });
    }
  };
  module.exports.createSaleOrder = createSaleOrder;