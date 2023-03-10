import mongoose from "mongoose";
const lessonSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            trim: true,
            minlength: 3,
            maxlength: 320,
            required: true,
        },
        slug: {
            type: String,
            lowercase: true,
        },
        content: {
            type: {},
            minlength: 200,
        },
        video_link: {},
        free_preview: {
            type: Boolean,
            default: false,
        },
    },
    { timestamps: true }
);
const courseSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            trim: true,
            minlength: 3,
            maxlength: 320,
            required: true,
        },
        duration: {
            type: String,
        },
        slug: {
            type: String,
            lowercase: true,
        },
        description: {
            type: String,
            required: true,
        },
        chapters: {
            type: String,
            required: true,
        },
        prerequisites: [String],
        price: {
            type: Number,
            default: 0,
        },
        image: {},
        free: {
            type: Boolean,
            default: true,
        },
        instructors: [String],
        published: {
            type: Boolean,
            default: false,
        },
        lessons: [lessonSchema],

    },
    { timestamps: true }
);

export default mongoose.model("Course", courseSchema);
