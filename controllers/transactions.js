//view transactions per customer
const odoo = require("../config/odoo");
const getTransactionsByCustomer = async (req, res) => {
    const id = req.params.id;
    //const fields = req.query.fields
    try {
      const result = await odoo.searchRead('pos.order', {partner_id: parseInt(id)})
      return res.status(200).send({
        status: "success",
        message: "Customers' Transactions returned successfully!",
        data: result,
      });
    } catch (error) {
      console.log(`Error occured while processing request: ${error}`);
      return res.status(500).send({ status: "error", message: error.name });
    }
  };

module.exports.getTransactionsByCustomer = getTransactionsByCustomer;


//view transactions

const getTransactions = async (req, res) => {
    //const id = req.params.id;
  //const fields = req.query.fields;
  const fields = req.query.fields ? req.query.fields.split(",") : ["name"];

  //console.log(`Fields => ${fields}`);
  try {
    const result = await odoo.searchRead("pos.order",undefined, fields);
    return res.status(200).send({
      status: "success",
      message: "All Customers' Transactions returned successfully!",
      data: result,
    });
  } catch (error) {
    console.log(`Error occured while processing request: ${error}`);
    return res.status(500).send({ status: "error", message: error.name });
  }
  };

module.exports.getTransactions = getTransactions;