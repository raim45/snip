const snip = require("../models/snipD")

const snipped = []

const getUrls =(req, res)=>{
    res.status(200).json({sucess: true, data: snipped})

}

const getUrl = (req, res)=>{
    const {id} = req.params
    const item = snipped.find(item => item.id === id)
    if(!item){
        return res.status(404).json({sucess: false, msg: "id does not exist"})
    }
    return res.status(200).json({success: true, data: item})
}

const create = (req, res)=>{
    const {url}  = req.body
    const item = snip(url)
    snipped.push(item)

    return res.status(201).json({success: true, data: item})


}


const deleteUrl = (req, res)=>{
    const {id} = req.params
    const item = snipped.find(item => item.id === id)
    if(!item){
        return res.status(404).json({sucess: false, msg: "id does not exist"})
    }
    snipped.splice(snipped.indexOf(item), 1)
    return res.status(200).json({success: true})
}


module.exports = { 
    getUrls,
    getUrl,
    create,
    deleteUrl,
}