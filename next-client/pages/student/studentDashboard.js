import React, {useEffect} from "react";
import { useState, useContext } from "react";
import { Context } from "../../context";
import axios from "axios";
// import UserRoute from "../../components/routes/UserRoute"

// components

import CardLineChart from "components/Cards/CardLineChart.js";
import CardBarChart from "components/Cards/CardBarChart.js";
import CardPageVisits from "components/Cards/CardPageVisits.js";
import CardSocialTraffic from "components/Cards/CardSocialTraffic.js";

// layout for page

import Student from "layouts/Student.js";
import CardCoursePreview from "../../components/Cards/CardCoursePreview";

export default function Dashboard() {
    const {
        state: { user },
    } = useContext(Context);
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        loadCourses();
    }, []);

    const loadCourses = async () => {
        try {
            setLoading(true);
            const { data } = await axios.get("/api/user-courses");
            setCourses(data);
            setLoading(false);
        } catch (err) {
            console.log(err);
            setLoading(false);
        }
    };

    return (
        <>
            <>
                <div className="container relative mx-auto">
                    <section
                        className="
                    cards
                    justify-items-center justify-center py-2 px-2 mt-10 mb-5">
                        {courses && courses.map((course) => (
                            <CardCoursePreview admin={true} key={course.slug} course={course}/>
                        ))}
                    </section>
                </div>

            </>
        </>
    );
}

Dashboard.layout = Student;
