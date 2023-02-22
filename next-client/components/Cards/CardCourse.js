import {useState,useContext, useEffect} from 'react'
import {useRouter} from "next/router"
import Link from "next/link";
import {Context} from "../../context"
import axios from "axios"

import {toast} from "react-toastify"
// components

export default function CardCourse(
    {
        course,
        loading,
        user,
        handlePaidEnrollment,
        handleFreeEnrollment,
        enrolled,
        setEnrolled,
    }
) {
    const  router  = useRouter()

    return (
        <>
            <div className=" relative mt-8 bg-white justify-center rounded-lg mx-4">
                <div className="justify-center flex py-5">
                    <h1 className="text-gray-900 font-bold text-2xl justify-center">{course.name}</h1>
                </div>
                <div className="items-center flex rounded-lg justify-center ">
                    <img src="/img/ai_course.jpg" alt="Product" className=" rounded-lg  object-cover  "/>
                </div>

                <div className=" bg-white  shadow-lg rounded-lg grid grid-cols-2">
                    <div className="w-2/3 p-4">
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
                    <div className="w-1/3 p-4">

                        <h1 className="text-gray-900 font-bold mt-5 text-lg">پیش نیاز ها</h1>
                        <p className="mt-2 text-gray-600 ">{course.prerequisites}</p>

                        <h1 className="text-gray-900 font-bold mt-5 text-lg">مدرسین</h1>

                        {course.instructors && course.instructors.map((inst, index) => (
                            <p key={index} className="mt-2 text-gray-600 ">{inst}</p>))
                        }
                        <br/>

                        {user? <button
                            className="bg-black px-6 pb-2 pt-2  text-white  font-normal h-10  items-center justify-center rounded-lg"
                            type="button"
                            disabled={loading}
                            onClick={course.free ? handleFreeEnrollment : handlePaidEnrollment}
                        >
                            {enrolled.status ? "مشاهده محتوای دوره" : "ثبت نام"}
                        </button> :
                            <button
                                className="bg-black px-6 pb-2 pt-2  text-white  font-normal h-10  items-center justify-center rounded-lg"
                                type="button"
                                disabled={loading}
                            >
                                <a
                                href={'/auth/login'}
                                >برای ثبت نام در دوره وارد شوید</a>

                            </button>
                        }

                    </div>

                </div>
            </div>
        </>
    );
}



