const router = require("express").Router();
const { authProtect, isAdmin } = require("../middlewares/auth");
const {
  createService,
  getServices,
  deleteService,
  updateService,
  getSingleService,
} = require("../controllers/ourservices.controllers");

router
  .route("/ourservices")
  .post(authProtect, isAdmin, createService)
  .get(getServices);

router
  .route("/ourservices/:id")
  .delete(authProtect, isAdmin, deleteService)
  .put(authProtect, isAdmin, updateService)
  .get(authProtect, isAdmin, getSingleService);

module.exports = router;
