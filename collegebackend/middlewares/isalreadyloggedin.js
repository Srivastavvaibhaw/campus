const jwt= require("jsonwebtoken");

const isAlreadyLoggedIn = (req, res, next) => {
    try {
        if (req.cookies && req.cookies.token) {
            const data = jwt.verify(req.cookies.token, "secretcode");
            if (data) {
                return res.status(403).render("error.ejs",  { message: "You are already logged in!", statusCode: 403 });
            }
        }
    } catch (err) {
        // Token is invalid or expired → allow login/signup
        return next();
    }
    next();
};

module.exports=isAlreadyLoggedIn
