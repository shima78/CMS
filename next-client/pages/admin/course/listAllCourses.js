import React from "react";
import { useState, useContext, useEffect } from "react";
import { Context } from "../../../context";
import axios from "axios";
import Link from "next/link"
import UserRoute from "../../../components/routes/UserRoute"
import {toast} from "react-toastify"

// components


// layout for page

import Admin from "layouts/Admin.js";


export default function Dashboard() {
    // state
    const [courses, setCourses] = useState([]);

    useEffect( () => {
         loadCourses();
    }, []);

    const loadCourses =  () => {
        axios
            .get("/api/fetch-all-courses")
            .then((res) => {
                setCourses(res.data);
            }).catch((err) => {
                console.log(err)
        })

    };

    return (

        <>
            <div className="container relative mx-auto">
                <section
                    className="
                    cards
                    justify-items-center justify-center py-2 px-2 mt-10 mb-5">
                                    {courses && courses.map((course) => (
                                        <div className="py-6 relative zoom">
                                            <a href={"/admin/course/view/"+ course.slug}>
                                            <div className="flex card max-w-md bg-white shadow-lg rounded-lg ">
                                                <div className="max-w-150-px bg-cover  h-48">
                                                    <img src="/img/ai_course.jpg" alt="Product" className="h-48 rounded-lg  object-cover bg-white "/>
                                                </div>
                                                <div className=" p-4">
                                                    <h1 className="text-gray-900 font-bold text-2xl">{course.name}</h1>
                                                    <p className="mt-2 text-gray-600 text-sm">{course.duration}</p>
                                                    <div className="flex item-center mt-2">
                                                        <svg className="w-5 h-5 fill-current text-gray-700" viewBox="0 0 24 24">
                                                            <path
                                                                d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"/>
                                                        </svg>
                                                        <svg className="w-5 h-5 fill-current text-gray-700" viewBox="0 0 24 24">
                                                            <path
                                                                d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"/>
                                                        </svg>
                                                        <svg className="w-5 h-5 fill-current text-gray-700" viewBox="0 0 24 24">
                                                            <path
                                                                d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"/>
                                                        </svg>
                                                        <svg className="w-5 h-5 fill-current text-gray-500" viewBox="0 0 24 24">
                                                            <path
                                                                d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"/>
                                                        </svg>
                                                        <svg className="w-5 h-5 fill-current text-gray-500" viewBox="0 0 24 24">
                                                            <path
                                                                d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"/>
                                                        </svg>
                                                    </div>
                                                    <div className="flex item-center justify-between mt-3">

                                                        {course.free &&
                                                            <h1
                                                                className="text-gray-700 font-bold text-xl">رایگان</h1>}
                                                        {!course.free &&
                                                            <h1
                                                            className="text-gray-700 font-bold text-xl">{course.price}</h1>}

                                                    </div>
                                                </div>
                                            </div>
                                            </a>
                                        </div>
                                        ))}
                                    </section>
            </div>

        </>




    );
}

Dashboard.layout = Admin;


