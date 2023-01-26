var express = require("express");
const {
  index,
  store,
  show,
  update,
  destroy,
  filterByName,
} = require("../controller/CategoryController");
var router = express.Router();

router.get("/", index);
router.post("/", store);
router.get("/:id", show);
router.put("/:id", update);
router.delete("/:id", destroy);
router.post("/filter", filterByName);

module.exports = router;
