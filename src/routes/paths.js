const express = require("express")
const route = express.Router()

route.get("/", () =>{})
route.get("/:id", ()=>{})
route.post("/", ()=>{})
route.delete("/", ()=>{})

module.exports = route