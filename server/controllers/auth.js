import User from "../models/user"
import { hashPassword } from "../utils/auth"

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
};
