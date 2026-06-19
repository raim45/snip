import snip from '../models/snipD.js'
import snipped from  '../data.js'

export const getUrls =(req, res)=>{
    res.status(200).json({sucess: true, data: snipped})

}

export const getUrl = (req, res)=>{
    const {id} = req.params
    const item = snipped.find(item => item.id === id)
    if(!item){
        return res.status(404).json({success: false, msg: "id does not exist"})
    }
    
    return res.status(200).json({success: true, data: item,})
}

export const createUrl = (req, res)=>{
    const {url}  = req.body
    const item = snip(url)
    snipped.push(item)
    const fullUrl = `${req.protocol}://${req.get("host")}/${item.shortCode}`
    return res.status(201).json({success: true, data: item, shortUrl: fullUrl})


}


export const deleteUrl = (req, res)=>{
    const {id} = req.params
    const item = snipped.find(item => item.id === id)
    if(!item){
        return res.status(404).json({sucess: false, msg: "id does not exist"})
    }
    snipped.splice(snipped.indexOf(item), 1)
    return res.status(200).json({success: true})
}
