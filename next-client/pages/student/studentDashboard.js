import React from "react";
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

export default function Dashboard() {
    // state
    const {
        state: { user },
    } = useContext(Context);

    return (
        <>
            <div className="flex flex-wrap">
                <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
                    <CardLineChart/>
                </div>
                <div className="w-full xl:w-4/12 px-4">
                    <CardBarChart/>
                </div>
            </div>
            <div className="flex flex-wrap mt-4">
                <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
                    <CardPageVisits />
                </div>
                <div className="w-full xl:w-4/12 px-4">
                    <CardSocialTraffic />
                </div>
            </div>
        </>
    );
}

Dashboard.layout = Student;
