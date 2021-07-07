// create new subscription
const createSubscriptions = async (req, res) => {
    const { payment_type, partner_type, partner_id, amount, communication, journal_id, payment_method_id, product_id } = req.body;
    if (!payment_type || !partner_type || !partner_id || !amount || !communication || !journal_id || !payment_method_id|| !product_id) {
      return res
        .status(400)
        .send({ status: "error", message: "Missing required body!" });
    }
  
    try {
      const result = await odoo.create("account.payment", {
        payment_type, 
        partner_type,
        partner_id, 
        amount, 
         communication, 
         journal_id, 
         payment_method_id, 
         product_id 
      });
      return res.status(201).send({
        status: "success",
        message: `New Subscription with ID: ${result} created successfully!`,
      });
    } catch (error) {
      console.log(`Error occured while processing request: ${error}`);
      return res.status(500).send({ status: "error", message: error.name });
    }
  };