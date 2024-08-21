import jwt from 'jsonwebtoken';

const generateTokenAndSetCookie = (userId, res) => {
    // payload
    const token = jwt.sign({userId}, process.env.JWT_SECRET, {          
        expiresIn : '15d',
    })

    res.cookie("jwt", token, {
        httpOnly : true,    // this cookie cannot be accessed by the browser and more secure
        maxAge: 15 * 24 * 60 * 60 * 1000, // 15 days
        sameSite: "strict",     // CSRF -> Cross-Site Request Forgery (CSRF) is an attack that forces authenticated users to submit a request to a Web application against which they are currently authenticated. CSRF attacks exploit the trust a Web application has in an authenticated user.
    })

    return token;
};

export default generateTokenAndSetCookie;