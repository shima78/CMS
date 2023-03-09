import Course from "../models/course";
import slugify from "slugify";
import User from "../models/user";
import Zibal from "./zibal";

// Initialize with configurations
Zibal.init({
    merchant: '61d0809518f9344fd9c2eb5b',
    callbackUrl: 'https://tailwindui.com/components#pricing',
    logLevel: 2
    // 0: none (default in production)
    // 1: error
    // 2: error + info (default)
});

export const create = async (req, res) => {
    console.log("CREATE COURSE", req.body);
    // return;
    try {
        const alreadyExist = await Course.findOne({
            slug: slugify(req.body.name.toLowerCase()),
        });
        if (alreadyExist) return res.status(400).send("عنوان تکراری است");

        const course = await new Course({
            slug: slugify(req.body.name),
            instructor: req.auth._id,
            ...req.body,
        }).save();

        res.json(course);
    } catch (err) {
        console.log(err);
        return res.status(400).send("دوره ساخته نشد. دوباره تلاش کنید");
    }
};

export const fetchAllCourses = async (req,res) => {
    try{
        const courses = await Course.find({})
            .sort({ cratedAt: -1 })
            .exec()
        res.json(courses)
    }
    catch(err){
        console.log(err)
    }
}

export const fetchCourse = async (req,res) => {
    try{
        const course = await Course.findOne({slug : req.params.slug})
            .exec()
        res.json(course)
    }
    catch(err){
        console.log(err)
    }
}

export const checkEnrollment = async (req, res) => {
    const { courseId } = req.params;
    // find courses of the currently logged-in user
    const user = await User.findById(req.auth._id).exec();
    // check if course_id is found in user courses array
    let ids = [];
    let length = 0
    if(user.courses){
        length = user.courses.length;
    }


    for (let i = 0; i < length; i++) {
        ids.push(user.courses[i].toString());
    }
    res.json({
        status: ids.includes(courseId),
        course: await Course.findById(courseId).exec(),
    });
};

export const freeEnrollment = async (req, res) => {
    try {
        // check if course is free or paid
        const course = await Course.findById(req.params.courseId).exec();
        if (!course.free) return;

        const result = await User.findByIdAndUpdate(
            req.auth._id,
            {
                $addToSet: { courses: course._id },
            },
            { new: true }
        ).exec();
        console.log(result);
        res.json({
            message: "با موفقیت ثبت نام شدید!",
            course,
        });
    } catch (err) {
        console.log("خطایی رخ در ثبت نام رایگان رخ داد ", err);
        return res.status(400).send("خطا. ثبت نام انجام نشد");
    }
};

export const paidEnrollment = async (req, res) => {
    try {
        // check if course is free or paid
        const course = await Course.findById(req.params.courseId)
            .exec();
        console.log(course)
        if (course.free) return;
        //Rials
        const fee = (course.price * 10);

        // Payment Request
        Zibal.request(fee)
            .then((result) => {
                console.log(result);
                const trackId = result.trackId
                // { trackId: 1533727744287, result: 100, message: 'success', statusMessage: 'با موفقیت تایید شد.' }
                const url = Zibal.startURL(trackId);
                res.send({url:url});
            }).catch((err) => {
            console.error(err);
            // { result: 103, message: 'authentication error', statusMessage: '{merchant} غیرفعال' }
        });
// Payment Start URL

// >> then open url in browser

        // console.log("SESSION ID => ", session);
        //
        // await User.findByIdAndUpdate(req.user._id, {
        //     stripeSession: session,
        // }).exec();
        // res.send(session.id);
    } catch (err) {
        console.log("PAID ENROLLMENT ERR", err);
        return res.status(400).send("Enrollment create failed");
    }
};

export const userCourses = async (req, res) => {
    const user = await User.findById(req.auth._id).exec();
    const courses = await Course.find({ _id: { $in: user.courses } })
        .exec();
    res.json(courses);
};
