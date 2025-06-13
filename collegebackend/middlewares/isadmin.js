const jwt = require("jsonwebtoken");
const expresserror = require("../utils/expresserror");

const isadmin = async (req, res, next) => {
    try {
        if (!req.cookies || !req.cookies.token) {
            return next(new expresserror(401, "You must log in first"));
        }

        // Verify the JWT token
        const data = jwt.verify(req.cookies.token, "secretcode"); // Use env variable for security

        // Check if the user's email matches the admin email
        if (data.email !== process.env.ADMIN_EMAIL) {
            return next(new expresserror(403, "Forbidden: Admin access only"));
        }

        req.user = data; // Attach user data to request
        next(); // Move to next middleware
    } catch (err) {
        console.error("Error while isadmin authentication:", err.message);
        return next(new expresserror(401, "Unauthorized: Invalid or expired token"));
    }
};

module.exports = isadmin;
