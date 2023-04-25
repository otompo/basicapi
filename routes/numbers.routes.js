const router = require("express").Router();
const { getNumbers } = require("../controllers/numbers.controllers");
const { authProtect, isAdmin } = require("../middlewares/auth");

router.route("/numbers").get(authProtect, isAdmin, getNumbers);

module.exports = router;
