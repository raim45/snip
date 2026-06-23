import { Request, Response, NextFunction } from "express"
const errors = (err: any, req: Request, res: Response, next: NextFunction) => {
    res.status(500).json({msg: err.message})
}

export default errors