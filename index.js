const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const helmet = require("helmet");
require('./config/db');
require("dotenv").config();

// routes
const products = require("./routes/products");
const customers = require("./routes/customers");
const transactions = require("./routes/transactions");
const purchaseOrders = require("./routes/purchaseOrders");
const saleOrders = require("./routes/saleOrders");
// middlewares
const errorHandler = require("./middlewares/errorHandler");
const notFound = require("./middlewares/notFound");

// app
const app = express();

// port
const port = process.env.PORT || 3030;

app.use(logger("dev"));
app.use(cors());
app.use(helmet());
app.use(express.json());

app.use("/api", products);
app.use("/api", customers);
app.use("/api", transactions);
app.use("/api", purchaseOrders);
app.use("/api", saleOrders);
// error handlers
app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Listening: http://localhost:${port}`);
});
