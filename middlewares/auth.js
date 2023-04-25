// const { promisify } = require("util");
const jwt = require("jsonwebtoken");
const AppError = require("../utils/appError");

const ErrorHandler = require("../utils/ErrorHandler");
const User = require("../models/user.model");
const catchAsync = require("../utils/catchAsync");
// const expressJwt = require("express-jwt");

// exports.requireSignin = expressJwt({
//   getToken: (req, res) => req.cookies.token,
//   secret: process.env.JWT_SECRET,
//   algorithms: ["HS256"],
// });

exports.authProtect = catchAsync(async (req, res, next) => {
  const { token } = req.cookies;
  if (!token) {
    return next(new ErrorHandler("Please Login for access this resource", 401));
  }

  const decodedData = jwt.verify(token, process.env.JWT_SECRET);

  req.user = await User.findById(decodedData.id);

  next();
});

exports.isAdmin = catchAsync(async (req, res, next) => {
  if (req.user && req.user.role === "admin") {
    next();
  } else {
    return res.status(401).json({
      flag: false,
      error: "Not authorized as an admin",
    });
  }
});

exports.authorizeRoles = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(
        new ErrorHandler(`${req.user.role} can not access this resources`)
      );
    }
    next();
  };
};
