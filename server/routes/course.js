import express from "express";

const router = express.Router();

// middleware
import { requireSignin, isAdmin } from "../middlewares";

// controllers
import { create, fetchAllCourses } from "../controllers/course";

// image
// router.post("/course/upload-image", uploadImage);
// router.post("/course/remove-image", removeImage);
// course
router.post("/course", requireSignin, create);
router.get("/fetch-all-courses", requireSignin, fetchAllCourses)
module.exports = router;
