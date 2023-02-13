import User from "../models/user";
var { expressjwt: jwt } = require("express-jwt");

export const requireSignin = jwt({
  getToken: (req, res) => req.cookies.token,
  secret: process.env.JWT_SECRET,
  algorithms: ["HS256"],
});

export const isAdmin = async (req, res, next) => {
  // console.log(req)
  try {
    const user = await User.findById(req.auth._id).exec()
    console.log("user", user.role)
    if(!user.role.includes("Admin")){
      return res.sendStatus(403)
    }
  }
  catch (err){
    console.log(err)

  }

}