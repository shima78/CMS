import mongoose from "mongoose";

const courseSchema = new mongoose.Schema(
    {
        name: {
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
        description: {
            type: String,
            required: true,
        },
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

    },
    { timestamps: true }
);

export default mongoose.model("Course", courseSchema);
