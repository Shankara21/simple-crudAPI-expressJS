var express = require("express");
const { index } = require("../controller/BookController");
var router = express.Router();
const BookController = require("../controller/BookController");

router.get("/", BookController.index);
router.post("/", BookController.store);
router.get("/filterByStatus/:status", BookController.filterByStatus);
router.get("/countByStatus", BookController.countBookByStatus);
router.get("/:id", BookController.show);
router.put("/:id", BookController.update);
router.delete("/:id", BookController.destroy);

module.exports = router;
