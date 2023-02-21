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
            {/*<section className="relative py-16  pt-32 mt-48">*/}
            {/*    <div className="container mx-auto px-4">*/}
            {/*        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">*/}
            {/*            <div className="px-6">*/}
            {/*                <div className="flex flex-wrap justify-center">*/}
            {/*                    <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">*/}
            {/*                        <div className="relative">*/}
            {/*                            <img*/}
            {/*                                alt="..."*/}
            {/*                                src="/img/team-2-800x800.jpg"*/}
            {/*                                className="shadow-xl  h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"*/}
            {/*                            />*/}
            {/*                        </div>*/}
            {/*                    </div>*/}

            {/*                </div>*/}
            {/*                <div className="text-center mt-20 mb-12">*/}
            {/*                    <h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">*/}
            {/*                        {course.name}*/}
            {/*                    </h3>*/}
            {/*                    <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">*/}
            {/*                        {course.description}*/}
            {/*                        <i className="fas fa-envelope mr-2 text-lg text-blueGray-400"/>{" "}*/}
            {/*                    </div>*/}
            {/*                    <div className="mb-2 text-blueGray-600 mt-10">*/}
            {/*                        {course.price}*/}
            {/*                        <i className="fas fa-user mr-2 text-lg text-blueGray-400"/> {" "}*/}
            {/*                    </div>*/}

            {/*                </div>*/}

            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</section>*/}
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
