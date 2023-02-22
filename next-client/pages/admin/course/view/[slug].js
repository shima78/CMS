import {useState, useEffect} from 'react'
import {useRouter} from "next/router"
import UserRoute from "../../../../components/routes/UserRoute"
import Admin from "../../../../layouts/Admin";
import axios from "axios"

export default function CourseView() {
    const [course, setCourse] = useState({})

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
    return (
        <UserRoute>

            <div className="py-6 relative ">
                <div className="flex bg-white shadow-lg rounded-lg grid grid-cols-2">
                    <div className="w-2/3 p-4">
                        <h1 className="text-gray-900 font-bold text-2xl">{course.name}</h1>
                        <h1 className="text-gray-900 font-bold mt-5 text-lg">توضیحات</h1>
                        <p className="mt-2 text-gray-600 ">{course.description}</p>

                        <h1 className="text-gray-900 font-bold mt-5 text-lg">پیش نیاز ها</h1>
                        <p className="mt-2 text-gray-600 ">{course.prerequisites}</p>

                        <h1 className="text-gray-900 font-bold mt-5 text-lg">طول دوره</h1>
                        <p className="mt-2 text-gray-600 ">{course.duration}</p>

                        <h1 className="text-gray-900 font-bold mt-5 text-lg">مدرسین</h1>

                        {course.instructors && course.instructors.map((inst) => (
                            <p className="mt-2 text-gray-600 ">{inst}</p>))
                        }
                        <h1 className="text-gray-900 font-bold mt-5 text-lg">هزینه دوره</h1>
                        {course.free &&
                            <p className="mt-2 text-gray-600 ">رایگان</p>
                        }
                        {!course.free &&
                            <p className="mt-2 text-gray-600 ">{course.price}</p>
                        }



                        {/*<div className="flex item-center justify-between mt-3">*/}
                        {/*    <h1 className="text-gray-700 font-bold text-xl">{course.prerequisites}</h1>*/}
                        {/*    <button className="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded">Add*/}
                        {/*        to Card*/}
                        {/*    </button>*/}
                        {/*</div>*/}
                    </div>
                    <div className=" w-1/3 left-0 bg-cover rounded-lg bg-black h-full">
                        <img src="/img/ai_course.jpg" alt="Product" className="h-full rounded-lg w-full object-cover bg-white "/>
                    </div>
                </div>
            </div>



        </UserRoute>
    )
}

CourseView.layout = Admin;