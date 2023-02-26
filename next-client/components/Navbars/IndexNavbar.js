import  {useContext, useEffect,useState} from "react";
import Link from "next/link";
import {Context} from "../../context"
import axios from "axios"
import {useRouter} from "next/router"
import {toast} from "react-toastify"
// components



export default function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const {state, dispatch} = useContext(Context)
  const  router  = useRouter()
  const { user } = state

  useEffect(()=>{
    const user = window.localStorage.getItem('user')
  }, [])

  const logout = async () => {
    dispatch({ type: "LOGOUT" });
    window.localStorage.removeItem("user")
    console.log(user)
    const {data} = await axios.get("/api/logout")
    toast(data.message)
  }
  return (
    <>
      <nav className="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-white shadow">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link href="/">
              <a
                className="text-blueGray-700 text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
                href="#pablo"
              >
                داده فناوران هوشمند خوارزمی
              </a>
            </Link>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none" +
              (navbarOpen ? " block" : " hidden")
            }
            id="example-navbar-warning"
          >

            <ul className="flex flex-col lg:flex-row list-none mr-auto">
            </ul>
            <ul className="flex flex-col lg:flex-row list-none lg:ml-0">

              { user === null  &&(
                  <>
                    <li className="flex items-center">
                      <Link
                          href="/auth/login"

                      >
                        <a className={
                          "lg:text-black lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                        }>ورود</a>
                      </Link>
                    </li>
                    <li className="flex items-center">
                      <Link
                          href="/auth/register"

                      >
                        <a
                            className={
                              "lg:text-black  text-black " +
                                "px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                            }>ثبت نام</a>
                      </Link>
                    </li>
                  </>
              )

              }
              { user !== null && (
                  <>
                    <li onClick={logout} className="flex items-center cursor-pointer">
                        <span className=" clickable lg:text-black lg:hover:text-blueGray-200
                        text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                        >خروج</span>

                    </li>

                    {user && user.role.includes("Admin") &&
                        <li className="flex items-center">
                          <Link
                              href="/admin/course/listAllCourses"

                          >
                            <a
                                className={
                                  "lg:text-black lg:hover: text-black px-3 py-4 lg:py-2 flex" +
                                    " items-center text-xs uppercase font-bold"
                                }>پنل ادمین</a>
                          </Link>
                        </li>}
                    {user && user.role.includes("ُStudent") &&
                        <li className="flex items-center">
                          <Link
                              href="/student/studentDasboard"

                          >
                            <a
                                className={
                                    "lg:text-black lg:hover: text-black px-3 py-4 lg:py-2 flex" +
                                    " items-center text-xs uppercase font-bold"
                                }>پنل کاربری</a>
                          </Link>
                        </li>}

                  </>
              )
              }

            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
