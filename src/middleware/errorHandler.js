const errors = (err, req, res, next) => {
    res.status(500).json({msg: err.message})
}

export default errors