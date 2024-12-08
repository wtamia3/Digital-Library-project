module.exports = (req, res, next) => {
    if (req.body) {
        req.body.timestamp = new Date();
    }
    next();
};
