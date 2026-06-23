import {Request, Response, NextFunction} from 'express'

const validateUrl =(req: Request, res: Response, next: NextFunction)=>{
    const {url} = req.body
    if(!url){
        return res.status(400).json({success: false, msg: "no url provided"})
    }
    if(url.startsWith("https://") || url.startsWith("http://")){
        return next()
    }
    return res.status(400).json({success: false, msg: "invalid url format"})


}

export default validateUrl