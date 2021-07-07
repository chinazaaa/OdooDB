var jwt = require("jsonwebtoken");
var config = process.env;
const verifyToken = (req, res, next) => {
  var token =
     req.headers["x-access-token"];

  if (!token) {
    return res.status(403).send({
      success: false,
      message: "Token is required for verification",
      error: {
        statusCode: 403,
        auth: false,
        description: "You must provide a token to authenticate your call",
      },
    });
  }

  jwt.verify(token, 'verySecretValue', async function (err, decoded) {
    if (err) {
      return res.status(401).send({
        success: false,
        message: "Invalid Token",
        error: {
          statusCode: 401,
          auth: false,
          description: "You entered an invalid token",
        },
      });
    }

    // decoded = jwt_decode(token);

    // console.log(req.user);
    next();
  });
};

module.exports = verifyToken;
