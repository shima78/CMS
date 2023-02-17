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
                                        <div class="card shadow-lg zoom
                                         duration-500 transform hover:scale-125 hover:shadow-xl ml-3 mb-3">
                                            <a href="#">
                                                    <img src="https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1
                                                    .2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=
                                                    crop&w=500&q=60" alt="Product" class="h-48 card-img object-cover bg-white " />
                                        <div class="px-4 py-3 w-72">
                                        <span class="text-gray-400 mr-3 uppercase text-xs">Brand</span>
                                        <p class="text-lg font-bold text-black truncate block capitalize">{course.name}</p>
                                        <div class="flex items-center">
                                        <p class="text-lg font-semibold text-black cursor-auto my-3">{course.free}</p>
                                        <del>
                                        <p class="text-sm text-gray-600 cursor-auto ml-2">{course.price}</p>
                                        </del>
                                        <div class="mr-auto">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-bag-plus" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
                                        <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                                        </svg></div>
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


