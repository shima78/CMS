
import CardCourse from "../../components/Cards/CardCourseAdmin";
import Navbar from "../../components/Navbars/IndexNavbar";

export default function CourseView() {

    return (
        <>
            <Navbar  />
            <main className={"mt-16"}>
                <CardCourse/>
            </main>
        </>
    )
}


