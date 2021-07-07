//view purchase orders 
const odoo = require("../config/odoo");
const getPurchaseOrder = async (req, res) => {
    // const id = req.params.id;
    // const fields = req.query.fields ? req.query.fields.split(",") : ["name"];
    try {
      const result = await odoo.read("purchase.order");
      return res.status(200).send({
        status: "success",
        message: "Purchase Orders returned successfully!",
        data: result,
      });
    } catch (error) {
      console.log(`Error occured while processing request: ${error}`);
      return res.status(500).send({ status: "error", message: error.name });
    }
  };

  module.exports.getPurchaseOrder= getPurchaseOrder;