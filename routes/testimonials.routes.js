const router = require("express").Router();
const { authProtect, isAdmin } = require("../middlewares/auth");
const {
  createTestimonial,
  getTestimonials,
  deleteTestimonial,
  updateTestimonial,
} = require("../controllers/testimonials.conrollers");

router
  .route("/testimonials")
  .post(authProtect, isAdmin, createTestimonial)
  .get(getTestimonials);

router
  .route("/testimonials/:id")
  .delete(authProtect, isAdmin, deleteTestimonial)
  .put(authProtect, isAdmin, updateTestimonial);

module.exports = router;
