const router = require("express").Router();
const { authProtect, isAdmin } = require("../middlewares/auth");

const {
  createHero,
  getHero,
  createFooter,
  getFooter,
  createAbout,
  getAbout,
} = require("../controllers/website.controllers");

router.route("/hero/:hero").get(getHero);
router.route("/about/:about").get(getAbout);
router.route("/footer/:footer").get(getFooter);
router.route("/hero").post(authProtect, isAdmin, createHero);

router.route("/footer").post(authProtect, isAdmin, createFooter);
router.route("/about").post(authProtect, isAdmin, createAbout);

module.exports = router;
