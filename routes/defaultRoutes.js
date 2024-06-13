const router = require("express").Router();
const request = require("request");

const {
  getLogin,
  login,
  createuser,
  getCreateuser,
  home,
  getUserQuotes,
  getUserHomePage,
  userHomePage,
} = require("../controllers/defaultController");

// get login form
router.get("/", getLogin);
// post login form
router.post("/sign-in", login, getUserHomePage);
router.get("/sign-up", getCreateuser);
// post signup form
router.post("/sign-up", createuser);

router.post("/home", userHomePage, getUserHomePage);

router.get("/:username", getUserQuotes);

module.exports = router;
