const express = require("express");
const router = express.Router();

const messageCtrl = require("../controllers/message.js");
router.post("/", messageCtrl.postMessage);

module.exports = router;