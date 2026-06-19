import express from 'express'
import helmet from 'helmet'
import cors from 'cors'
import route from './routes/paths.js'
import snipped from './data.js'
import error from './middleware/errorHandler.js'

const app = express()

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
app.use(error)

export default app