const odoo = require("../config/odoo");
// get single customers by ID
const getCustomers = async (req, res) => {
    const id = req.params.id;
    const fields = req.query.fields ? req.query.fields.split(",") : ["name"];
    try {
      const result = await odoo.read("res.partner", [parseInt(id)], fields);
      return res.status(200).send({
        status: "success",
        message: "Customers returned successfully!",
        data: result,
      });
    } catch (error) {
      console.log(`Error occured while processing request: ${error}`);
      return res.status(500).send({ status: "error", message: error.name });
    }
  };

module.exports.getCustomers = getCustomers;