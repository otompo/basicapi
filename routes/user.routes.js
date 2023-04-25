const router = require("express").Router();
const { authProtect, isAdmin } = require("../middlewares/auth");
const {
  getallusers,

  currentUser,
  createUser,
  getSingleUser,
  updateProfile,
} = require("../controllers/auth.controllers");

router
  .route("/users")
  .get(authProtect, isAdmin, getallusers)
  .post(authProtect, isAdmin, createUser);
router.route("/currentadmin").get(authProtect, isAdmin, currentUser);
router.route("/currentuser/:userId").get(authProtect, getSingleUser);
router.route("/profileupdate").put(authProtect, updateProfile);

module.exports = router;
