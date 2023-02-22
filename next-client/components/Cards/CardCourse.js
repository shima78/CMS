import {useState,useContext, useEffect} from 'react'
import {useRouter} from "next/router"
import axios from "axios"
import Link from "next/link";
import {Context} from "../../context"
import axios from "axios"

import {toast} from "react-toastify"
// components

export default function CardCourse(props) {
    const {state, dispatch} = useContext(Context)
    const  router  = useRouter()
    const { user } = state
    const course = props.course
    return (
        <>
            <div className=" relative mt-8 bg-white justify-center rounded-lg">
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
                        <button
                            className="bg-black text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                            type="button"
                        >
                            <h1 className="text-gray-900 font-bold mt-5 text-lg">button</h1>
                            <i className="fab fa-github">دکه</i>
                        </button>

                        <h1 className="text-gray-900 font-bold mt-5 text-lg">پیش نیاز ها</h1>
                        <p className="mt-2 text-gray-600 ">{course.prerequisites}</p>
                        <h1 className="text-gray-900 font-bold mt-5 text-lg">پیش نیاز ها</h1>
                        <p className="mt-2 text-gray-600 ">{course.prerequisites}</p>

                        <h1 className="text-gray-900 font-bold mt-5 text-lg">مدرسین</h1>

                        {course.instructors && course.instructors.map((inst) => (
                            <p className="mt-2 text-gray-600 ">{inst}</p>))
                        }

                        {user?  <button
                                className="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                                type="button"
                            >
                                <i className="fab fa-github">دکه</i>
                            </button>:
                            <button
                                className={"bg-emerald-500 w-6/12 primary"}

                            >
                                برای ثبت نام وارد حساب کاربری شوید
                            </button>
                        }

                    </div>

                </div>
            </div>
        </>
    );
}

export async function getServerSideProps() {
    const {data} = await axios.get(`${process.env.API}/fetch-course`)
    return {
        props:{
            course : data
        },
    }
}

