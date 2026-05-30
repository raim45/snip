const express = require("express")
const helmet = require("helmet")
const cors = require("cors")
const app = express()
const route = require("./routes/paths")
const snipped = require("./data")


app.use(express.json())
app.use(cors())
app.use(helmet())
app.use("/api/snip", route )
app.get("/:shortCode", (req, res)=>{
    const {shortCode} = req.params
    const item = snipped.find(item => item.shortCode === shortCode)
    if(!item){
        return res.status(404).json({sucess: false, msg: "url does not exist bro"})
    }
    item.click++
    return res.redirect(301, item.originalUrl )
 
})

module.exports = app