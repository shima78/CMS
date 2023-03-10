import {useState, useEffect} from 'react'
import {useRouter} from "next/router"
import axios from "axios"
import {toast} from "react-toastify"

// components
import AddLessonModal from "../Modal/AddLessonModal"
export default function CardCourseAdmin() {
    const [visible, setVisible] = useState(false);
    const [lesson, setLesson] = useState({
        title: "",
        content: "",
        video: {},
    });
    const [uploading, setUploading] = useState(false);
    const [uploadButtonText, setUploadButtonText] = useState("Upload Video");
    const [progress, setProgress] = useState(0);

    const [course, setCourse] = useState({})
    const [showModal, setShowModal] = useState(false)
    const router = useRouter()
    const {slug} = router.query
    useEffect( () => {
        loadCourse();
    }, []);

    const loadCourse =  () => {
        axios
            .get(`/api/fetch-course/${slug}`)
            .then((res) => {
                console.log(res)
                setCourse(res.data);
            }).catch((err) => {
            console.log(err)
        })

    };
    // FUNCTIONS FOR ADD LESSON
    const handleAddLesson = async (e) => {
        e.preventDefault();
        // console.log(values);
        try {
            const { data } = await axios.post(
                `/api/course/lesson/${slug}`,
                lesson
            );
            // console.log(data)
            setLesson({ ...lesson, title: "", content: "", video: {} });
            setVisible(false);
            setUploadButtonText("Upload video");
            setCourse(data);
            toast("درس با موفقیت اضاقه شد");
        } catch (err) {
            console.log(err);
            toast(err.message);
        }
    };

    return (
        <>
            <AddLessonModal showModal={showModal} modalTitle={"افزودن درس جدید"}
                            setShowModal={setShowModal}
                            lesson={lesson}
                            setLesson={setLesson}
                            handleAddLesson={handleAddLesson}
            />
            <div className=" relative  bg-white  shadow-lg   m-8  rounded-lg">
                <div className="justify-center flex py-5">
                    <h1 className="text-gray-900 font-bold text-2xl justify-center">{course.name}</h1>
                </div>
                <div className="items-center flex rounded-lg justify-center ">
                    <img src="/img/ai_course.jpg" alt="Product" className=" rounded-lg  object-cover  "/>
                </div>
                <div className="grid grid-cols-3">
                    <div className="p-4">
                        <h1 className="text-gray-900 font-bold mt-5 text-lg">توضیحات</h1>
                        <p className="mt-2 text-gray-600 ">{course.description}</p>

                        <h1 className="text-gray-900 font-bold mt-5 text-lg">طول دوره</h1>
                        <p className="mt-2 text-gray-600 ">{course.duration}</p>

                        <h1 className="text-gray-900 font-bold mt-5 text-lg">هزینه دوره</h1>
                        {course.free &&
                            <p className="mt-2 text-gray-600 ">رایگان</p>
                        }
                        {!course.free &&
                            <p className="mt-2 text-gray-600 ">{course.price}</p>
                        }

                    </div>
                    <div className=" p-4">

                        <h1 className="text-gray-900 font-bold mt-5 text-lg">پیش نیاز ها</h1>
                        {course.prerequisites && course.prerequisites.map((preq, index) => (
                            <p key={index} className="mt-2 text-gray-600 ">{preq}</p>))
                        }
                        <br/>
                        <h1 className="text-gray-900 font-bold mt-5 text-lg">مدرسین</h1>

                        {course.instructors && course.instructors.map((inst) => (
                            <p className="mt-2 text-gray-600 ">{inst}</p>))
                        }

                    </div>
                    <div className=" p-4">
                        <h1 className="text-gray-900 font-bold mt-5 text-lg">دروس</h1>

                        {course.lessons && course.lessons.map((lesson) => (
                            <p className="mt-2 text-gray-600 ">{lesson.title}</p>))
                        }

                    </div>
                </div>
                <button
                    className="bg-green px-6 pb-2 pt-2 my-6 mx-4 text-white  font-normal h-10  items-center justify-center rounded-lg"
                    type="button"
                >
                    انتشار دوره
                </button>
                <button
                    className=" bg-blue px-6 pb-2 pt-2 my-6 mx-4 text-white  font-normal h-10  items-center justify-center rounded-lg"
                    type="button"
                    onClick={() => {
                        setShowModal(true)
                        console.log(showModal)
                    }}
                >
                   + درس جدید
                </button>
            </div>
        </>
    );
}
