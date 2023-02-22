import React from "react";
import { useState, useContext, useEffect } from "react";
import { Context } from "../../../context";
import axios from "axios";
import Link from "next/link"
import UserRoute from "../../../components/routes/UserRoute"
import {toast} from "react-toastify"

// components
import CardCoursePreview from "components/Cards/CardCoursePreview"

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
                                        <CardCoursePreview  key={course.slug} course={course}/>
                                        ))}
                                    </section>
            </div>

        </>




    );
}

Dashboard.layout = Admin;


