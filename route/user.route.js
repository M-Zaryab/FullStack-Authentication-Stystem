const router = require("express").Router();
const { register, signin } = require("../controller/user.controller");

router.post("/register", register);
router.post("/signin", signin);

module.exports = router;
