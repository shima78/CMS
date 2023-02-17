import User from "../models/user";
import { hashPassword, comparePassword } from "../utils/auth";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
    try {
        // console.log(req.body);
        const { name, email, password } = req.body;
        // validation
        if (!name) return res.status(400).send("نام کاربری وارد نشده است.");
        if (!password || password.length < 6) {
            return res
                .status(400)
                .send("رمز عبور باید حداقل 6 کاراکتر داشته باشد");
        }
        let userExist = await User.findOne({ email }).exec();
        if (userExist) return res.status(400).send("ایمیل قبلا استفاده شده است.");

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
        return res.status(400).send("خطا. دوباره تلاش کنید");
    }
};

export const login = async (req, res) => {
    try {
        // console.log(req.body);
        const { email, password } = req.body;
        // check if our db has user with that email
        const user = await User.findOne({ email }).exec();
        if (!user) return res.status(400).send("کاربری یافت نشد");
        // check password
        const match = await comparePassword(password, user.password);
        // create signed jwt
        const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
            expiresIn: "7d",
        });
        // return user and token to client, exclude hashed password
        user.password = undefined;
        // send token in cookie
        res.cookie("token", token, {
            httpOnly: true,
            // secure: true, // only works on https
        });
        // send user as json response
        res.json(user);
    } catch (err) {
        console.log(err);
        return res.status(400).send("خطا. دوباره تلاش کنید");
    }
};

export const logout = async (req, res) => {
    try {
        res.clearCookie("token");
        return res.json({ message: "با موفقیت خارج شدید" });
    } catch (err) {
        console.log(err);
    }
};

export const currentUser = async (req, res) => {
    try {
        const user = await User.findById(req.auth._id).select("-password").exec();
        console.log("CURRENT_USER", user);
        return res.json({ ok: true });
    } catch (err) {
        console.log(err);
    }
};
