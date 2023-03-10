import CardCourse from "../../components/Cards/CardCourse";
import Navbar from "../../components/Navbars/IndexNavbar";
import axios from "axios";
import {toast} from "react-toastify";
import {Context} from "../../context";
import {useState,useContext, useEffect} from 'react'
import {useRouter} from 'next/router'


export default function CourseView(props) {
    const {state, dispatch} = useContext(Context)
    const [loading, setLoading] = useState(false)
    const [enrolled, setEnrolled] = useState({})

    const router = useRouter()
    const {user} = state
    const course = props.course
    useEffect(() =>{

        console.log("check")
        checkEnrollment()

    },[loading])
    const checkEnrollment = async () => {
        console.log("check")
        const user = window.localStorage.getItem('user')
        if(user && course) {
            axios
                .get(`/api/check-enrollment/${course._id}`)
                .then((res) => {
                    console.log(res.data)
                    setEnrolled(res.data);
                }).catch((err) => {
                console.log(err)
            })
        }
        else {
            console.log(user,course)
        }

    }
    const handleFreeEnrollment = async (e) => {
        // console.log("handle free enrollment");
        e.preventDefault();
        console.log(enrolled)
        try {
            // check if user is logged in
            if (!user) router.push("auth/login")

            // check if already enrolled
            if (enrolled.status) {
                return router.push(`/student/course/${enrolled.course.slug}`);
                toast("شما قبلا در این دوره ثبت نام کرده اید")
            }

                setLoading(true);
            const { data } = await axios.post(`/api/free-enrollment/${course._id}`);
            toast(data.message);
            setLoading(false);
            // router.push(`/user/course/${data.course.slug}`);

        } catch (err) {
            toast("Enrollment failed. Try again.");
            console.log(err);
            setLoading(false);
        }
    };
    const handlePaidEnrollment = async () => {
        console.log("handle paid enrollment")
        try {
            setLoading(true)
            // check if user is logged in
            if (!user) return router.push("auth/login")
            // check if already enrolled
            if (enrolled.status)
                return router.push(`/`)
            const { data } = await axios.post(`/api/paid-enrollment/${course._id}`)
            return router.push(data.url)
        } catch (err) {
            toast("Enrollment failed, try again.")
            console.log(err)
            setLoading(false)
        }
    }
    return (
        <>
            <Navbar  />
            <main className={"mt-16"}>
                <CardCourse
                    course={props.course}
                    user={user}
                    loading={loading}
                    handlePaidEnrollment={handlePaidEnrollment}
                    handleFreeEnrollment={handleFreeEnrollment}
                    enrolled={enrolled}
                    setEnrolled={setEnrolled}
                />
            </main>
        </>
    )
}

export async function getServerSideProps({query}) {
    const {data} = await axios.get(`${process.env.API}/fetch-course/${query.slug}`)
    return {
        props:{
            course : data
        },
    }
}