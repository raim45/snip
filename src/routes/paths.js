const express = require("express")
const route = express.Router()
const calls = require("../controllers/snipC")

route.get("/", calls.getUrls)
route.get("/:id", calls.getUrl)
route.post("/", calls.createUrl)
route.delete("/", calls.deleteUrl)

module.exports = route