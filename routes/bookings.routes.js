const router = require("express").Router();
const { authProtect, isAdmin } = require("../middlewares/auth");
const {
  newBooking,
  getBookings,
  // getbill,
} = require("../controllers/bookings.controllers");

router
  .route("/bookings")
  .post(newBooking)
  .get(authProtect, isAdmin, getBookings);
// router.route("/getbill").post(getbill);

module.exports = router;
