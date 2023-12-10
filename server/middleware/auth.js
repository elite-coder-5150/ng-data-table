export const isAuth = async (req, res, next) => {
    if (req.session && req.session.user) {
        return next();
    } else {
        return res.status(401).send({
            message: 'unauthorized'
        })
    }
}