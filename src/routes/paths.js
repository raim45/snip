const express = require("express")
const route = express.Router()
const calls = require("../controllers/snipC")
const valid = require("../middleware/validateUrl")

route.get("/", calls.getUrls)
route.get("/:id", calls.getUrl)
route.post("/", valid, calls.createUrl)
route.delete("/:id", calls.deleteUrl)

module.exports = route