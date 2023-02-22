import Course from "../models/course";
import slugify from "slugify";
import User from "../models/user";

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
    let length = user.courses && user.courses.length;
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
