import React, {useContext, useEffect} from "react";
import Link from "next/link";
import {Context} from "../../context"
import axios from "axios"
import {useRouter} from "next/router"
import {toast} from "react-toastify"
// components

export default function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
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
    router.push("/auth/login")
  }
  return (
      <>
        <nav className="top-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg">
          <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
            <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">

              <Link
                  className="text-white text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
                  href="/"
              >
                <a className="text-white">خانه</a>
              </Link>

              <button
                  className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                  type="button"
                  onClick={() => setNavbarOpen(!navbarOpen)}
              >

                <i className="text-white fas fa-bars"/>
              </button>
            </div>
            <div
                className={
                    "lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none" +
                    (navbarOpen ? " block rounded shadow-lg" : " hidden")
                }
                id="example-navbar-warning"
            >
              <ul className="flex flex-col lg:flex-row list-none mr-auto">
              </ul>
              <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">

                { user === null  &&(
                    <>
                      <li className="flex items-center">
                        <Link
                            href="/auth/login"

                        >
                          <a className={
                            "lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                          }>ورود</a>
                        </Link>
                      </li>
                      <li className="flex items-center">
                        <Link
                            href="/auth/register"

                        >
                          <a
                              className={
                                "lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                              }>ثبت نام</a>
                        </Link>
                      </li>
                    </>
                )

                }
                { user !== null && (
                    <>
                      <li onClick={logout} className="flex items-center cursor-pointer">
                        <span className=" clickable lg:text-white lg:hover:text-blueGray-200
                        text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                        >خروج</span>

                      </li>

                      {user && user.role.includes("Admin") &&
                        <li className="flex items-center">
                        <Link
                            href="/admin/dashboard"

                        >
                          <a
                              className={
                                "lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                              }>پنل ادمین</a>
                        </Link>
                      </li>}
                    </>
                )

                }
                <li className="flex items-center">
                  <a
                      className="lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                      href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdemos.creative-tim.com%2Fnotus-react%2F%23%2F"
                      target="_blank"
                  >
                    <i className="lg:text-blueGray-200 text-blueGray-800 fab fa-instagram text-lg leading-lg " />
                  </a>
                </li>



                <li className="flex items-center">
                  <a
                      className="lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                      href="https://github.com/creativetimofficial/notus-react?ref=nr-auth-navbar"
                      target="_blank"
                  >
                    <i className="lg:text-blueGray-200 text-blueGray-400 fab fa-github text-lg leading-lg " />
                    <span className="lg:hidden inline-block ml-2">Star</span>
                  </a>
                </li>

              </ul>
            </div>
          </div>
        </nav>
      </>
  );
}
