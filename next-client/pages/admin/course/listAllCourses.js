import React from "react";
import { useState, useContext, useEffect } from "react";
import { Context } from "../../../context";
import axios from "axios";
import Link from "next/link"
import UserRoute from "../../../components/routes/UserRoute"
import {toast} from "react-toastify"

// components

import CardLineChart from "components/Cards/CardLineChart.js";
import CardBarChart from "components/Cards/CardBarChart.js";
import CardPageVisits from "components/Cards/CardPageVisits.js";
import CardSocialTraffic from "components/Cards/CardSocialTraffic.js";

// layout for page

import Admin from "layouts/Admin.js";
import Navbar from "../../../components/Navbars/AuthNavbar";
import Footer from "../../../components/Footers/Footer";

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
            <div className="relative flex flex-col  break-words bg-white mb-6 shadow-xl rounded-lg mt-32">
                <div className="px-6">
                    <div className="flex flex-wrap justify-center">
                        <div className="w-full px-4 flex justify-center">
                            <div className="relative">

                            </div>
                        </div>

                    </div>
                    <div className="text-center mt-12">
                        <h3 className="text-xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                            Jenna Stones
                        </h3>
                        <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                            <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>{" "}
                            Los Angeles, California
                        </div>
                        <div className="mb-2 text-blueGray-600 mt-10">
                            <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
                            Solution Manager - Creative Tim Officer
                        </div>
                        <div className="mb-2 text-blueGray-600">
                            <i className="fas fa-university mr-2 text-lg text-blueGray-400"></i>
                            University of Computer Science
                        </div>
                    </div>
                    <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                        <div className="flex flex-wrap justify-center">
                            <div className="w-full lg:w-9/12 px-4">
                                {courses && courses.map((course) => (
                                    <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                                        {course.description}
                                    </p> ))
                                }
                                <a
                                    href="#pablo"
                                    className="font-normal text-lightBlue-500"
                                    onClick={(e) => e.preventDefault()}
                                >
                                    Show more
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative flex flex-col  break-words bg-white mb-6 shadow-xl rounded-lg mt-32">
                <div className="px-6">
                    <div className="flex flex-wrap justify-center">
                        <div className="w-full px-4 flex justify-center">
                            <div className="relative">

                            </div>
                        </div>

                    </div>
                    <div className="text-center mt-12">
                        <h3 className="text-xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                            Jenna Stones
                        </h3>
                        <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                            <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>{" "}
                            Los Angeles, California
                        </div>
                        <div className="mb-2 text-blueGray-600 mt-10">
                            <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
                            Solution Manager - Creative Tim Officer
                        </div>
                        <div className="mb-2 text-blueGray-600">
                            <i className="fas fa-university mr-2 text-lg text-blueGray-400"></i>
                            University of Computer Science
                        </div>
                    </div>
                    <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                        <div className="flex flex-wrap justify-center">
                            <div className="w-full lg:w-9/12 px-4">
                                {courses && courses.map((course) => (
                                    <div>
                                        <h1>Featured Products</h1>
                                        <div className='item-container'>
                                                <div className='card'>
                                                    <h3>{course.name}</h3>
                                                    <p>{course.duration}</p>
                                                </div>
                                        </div>
                                    </div>
                                ))}
                                <a
                                    href="#pablo"
                                    className="font-normal text-lightBlue-500"
                                    onClick={(e) => e.preventDefault()}
                                >
                                    Show more
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>




    );
}

Dashboard.layout = Admin;


