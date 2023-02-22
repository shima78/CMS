import {useState, useEffect} from 'react'
import {useRouter} from "next/router"
import UserRoute from "../../../../components/routes/UserRoute"
import Admin from "../../../../layouts/Admin";
import axios from "axios"
import CardCourseAdmin from "../../../../components/Cards/CardCourseAdmin";

export default function CourseView() {

    return (
        <UserRoute>
            <CardCourseAdmin/>
        </UserRoute>
    )
}

CourseView.layout = Admin;
