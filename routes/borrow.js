var express = require("express");
const BorrowController = require("../controller/BorrowController");

var router = express.Router();

router.get("/", BorrowController.index);
router.get("/:id", BorrowController.show);

module.exports = router;
