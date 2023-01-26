var express = require("express");
const {
  index,
  store,
  show,
  destroy,
  update,
  filterByGender,
} = require("../controller/UserController");
var router = express.Router();

/* GET users listing. */
//\\//\\//\\
//! CRUD \\\
//\\//\\//\\
router.get("/", index);
router.post("/", store);
router.delete("/:id", destroy);
router.put("/:id", update);
router.get("/:id", show);
router.post("/filterbyGender", filterByGender);

//\\//\\//\\//\\/\
// ? FILTERING \\\
//\\//\\//\\\//\\/\

module.exports = router;
