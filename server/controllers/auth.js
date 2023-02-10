import User from "../models/user"
import { hashPassword, comparePassword } from "../utils/auth"
import jwt from 'jsonwebtoken'
export const register = async (req, res) => {
    try {

        const { name, email, password } = req.body

        // validation
        if (!name) return res.status(400).send("نام کاربری ضروری است")

        if (!password || password.length < 6) {
            return res
                .status(400)
                .send("رمز عبور باید طولانی تر از 6 کاراکتر باشد")
        }

        let userExist = await User.findOne({ email }).exec();
        if (userExist) return res.status(400).send("این ایمیل قبلا استفاده شده است");

        // hash password
        const hashedPassword = await hashPassword(password);

        // register
        const user = new User({
            name,
            email,
            password: hashedPassword,
        });
        await user.save();
        // console.log("saved user", user);
        return res.json({ ok: true });
    } catch (err) {
        console.log(err);
        return res.status(400).send("خطا. لطفا دوباره تلاش کنید");
    }
}
export const login = async (req,res) => {
    try{
        //console.log(req.body)

        //check if user exists
        const {email, password} = req.body
        const user = await User.findOne({email}).exec()
        if(!user) return res.status(400).send("کاربر یافت نشد")

        //check password
        const match = await comparePassword(password, user.password)

        //create signed jwt

        const token = jwt.sign(
            {_id: user._id},
            process.env.JWT_SECRET,
            { expiresIn : "7d"})
        //return user and token to client
        user.password = undefined
        res.cookie( "token" , token, {
                httpOnly : true,
                // secure : true
            }
        )
        res.json(user)

    }catch (err){
        console.log(err)
        return res.status(400).send("خطایی رخ داد. دوباره تلاش کنید")
    }
}
export const logout = async (req, res) => {
    try {
        res.clearCookie('token', {path:'/landing'});
        return res.json({ message: "Signout success" });
    } catch (err) {
        console.log(err);
    }
}
export const currentUser = async (req, res) => {
    try {
        const user = await User.findById(req.user._id).select("-password").exec();
        console.log("CURRENT_USER", user);
        return res.json(user);
    } catch (err) {
        console.log(err);
    }
}
