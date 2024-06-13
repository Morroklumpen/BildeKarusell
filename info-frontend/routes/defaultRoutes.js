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

// get home
// router.get("/", home);
// get signup form

// cookie test
//
router.get("/:username", getUserQuotes);

module.exports = router;

// const cookieName = "token";
// router.get("/cookie", function (req, res) {
//   let minute = 60 * 1000;
//   res.cookie(cookieName, "myToken", { maxAge: minute });

//   res.render("cookieTest", {
//     title: "cookieTest",
//     message: "",
//   });
// });

// router.post("/cookie", function (req, res) {
//   console.log(cookieName, " Cookie: ", req.cookies[cookieName]);
//   return res.send("nice!");
// });
