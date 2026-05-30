const validateUrl =(req, res, next)=>{
    const {url} = req.body
    if(!url){
        return res.status(400).json({success: false, msg: "no url provided"})
    }
    if(url.startsWith("https://") || url.startsWith("http://")){
        return next()
    }
    return res.status(400).json({success: false, msg: "invalid url format"})


}

module.exports = validateUrl