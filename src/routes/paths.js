import express from 'express'
import { getUrls, getUrl, createUrl, deleteUrl } from '../controllers/snipC.js'
import valid from '../middleware/validateUrl.js'
const route = express.Router()

route.get("/", getUrls)
route.get("/:id", getUrl)
route.post("/", valid, createUrl)
route.delete("/:id", deleteUrl)

export default route