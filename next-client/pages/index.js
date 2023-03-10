import React, {useEffect, useState} from "react";
import Link from "next/link";



// components

import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer.js";
import CardCoursePreview from "components/Cards/CardCoursePreview"
import axios from "axios";
export default function Landing(props) {

  // state
  // const [courses, setCourses] = useState([]);
  //
  // useEffect( () => {
  //   loadCourses();
  // }, []);
  //
  // const loadCourses =  () => {
  //   axios
  //       .get("/api/fetch-all-courses")
  //       .then((res) => {
  //         setCourses(res.data);
  //       }).catch((err) => {
  //     console.log(err)
  //   })
  //
  // };

  return (
      <>
        <Navbar transparent />
        <main>
          <div className="relative pt-16 pb-32 flex  items-center  min-h-screen-75">
            <div
                className="absolute top-0 w-full h-full bg-center bg-cover"
                style={{
                  backgroundImage: "url('/img/banner.jpg')",
                }}
            >
            <span
                id="blackOverlay"
                className="w-full h-full absolute opacity-50 bg-black"
            />
            </div>
            <div className="container relative mx-auto  flex flex-wrap">

              <div className="w-full lg:w-8/12 px-4 ml-auto mr-auto text-center">
                <div className="pr-12">
                  <h1 className="text-white font-semibold text-5xl">
                    داده نگاران هوشمند فناور خوارزمی
                  </h1>
                  <p className="mt-4 text-lg text-blueGray-200">
                    شرکت داده نگاران فناور هوشمند خوارزمی با گرد هم آوردن جمعی متخصص با تجربه
                    و خبره در حوزه فناوری اطلاعات و هوش مصنوعی در سطح دانشگاه
                    و صنعت با هدف انتقال دانش و تجربه به جوانان کشور تاسیس گردیده است.

                  </p>
                </div>
              </div>

            </div>
            <div
                className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
                style={{ transform: "translateZ(0)" }}
            >
              <svg
                  className="absolute bottom-0 overflow-hidden"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  version="1.1"
                  viewBox="0 0 2560 100"
                  x="0"
                  y="0"
              >
                <polygon
                    className="text-blueGray-200 fill-current"
                    points="2560 0 2560 100 0 100"
                ></polygon>
              </svg>
            </div>
          </div>

          <section className="pb-20 bg-blueGray-200 -mt-24">
            <div className="container mt-0 mx-auto px-4">

              <div className="flex flex-wrap">
                <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                  <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                        <i className="fas fa-newspaper"></i>
                      </div>
                      <h6 className="text-xl font-semibold">خبرنامه</h6>
                      <p className="mt-2 mb-4 text-blueGray-500">
                        آخرین اخبار دنیای هوش مصنوعی
                      </p>
                    </div>
                  </div>
                </div>

                <div className="w-full md:w-4/12 px-4 text-center">
                  <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-lightBlue-400">
                        <i className="fas fa-blog"></i>
                      </div>
                      <h6 className="text-xl font-semibold">وبلاگ</h6>
                      <p className="mt-2 mb-4 text-blueGray-500">
                        پست های آموزشی
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                  <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-400">
                        <i className="fas fa-school"></i>
                      </div>
                      <h6 className="text-xl font-semibold">دوره ها و کارگاه ها</h6>
                      <p className="mt-2 mb-4 text-blueGray-500">
                        دوره های تخصصی هوش مصنوعی و علم داده
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center mt-32">

                <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                  <div className="container relative mx-auto">
                    <section
                        className="
                    cards
                    justify-items-center justify-center py-2 px-2 mt-0 mb-5">
                      {props.courses && props.courses.map((course) => (
                        <CardCoursePreview admin={false} key={course.slug} course={course}/>
                      ))}
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/*<section className="relative py-20">*/}
          {/*  <div*/}
          {/*      className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"*/}
          {/*      style={{ transform: "translateZ(0)" }}*/}
          {/*  >*/}
          {/*    <svg*/}
          {/*        className="absolute bottom-0 overflow-hidden"*/}
          {/*        xmlns="http://www.w3.org/2000/svg"*/}
          {/*        preserveAspectRatio="none"*/}
          {/*        version="1.1"*/}
          {/*        viewBox="0 0 2560 100"*/}
          {/*        x="0"*/}
          {/*        y="0"*/}
          {/*    >*/}
          {/*      <polygon*/}
          {/*          className="text-white fill-current"*/}
          {/*          points="2560 0 2560 100 0 100"*/}
          {/*      ></polygon>*/}
          {/*    </svg>*/}
          {/*  </div>*/}

          {/*  <div className="container mx-auto px-4">*/}
          {/*    <div className="items-center flex flex-wrap">*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*</section>*/}

          {/*<section className="pt-20 pb-48">*/}
          {/*  <div className="container mx-auto px-4">*/}
          {/*    <div className="flex flex-wrap justify-center text-center mb-24">*/}
          {/*      <div className="w-full lg:w-6/12 px-4">*/}
          {/*        <h2 className="text-4xl font-semibold">Here are our heroes</h2>*/}
          {/*        <p className="text-lg leading-relaxed m-4 text-blueGray-500">*/}
          {/*          According to the National Oceanic and Atmospheric*/}
          {/*          Administration, Ted, Scambos, NSIDClead scentist, puts the*/}
          {/*          potentially record maximum.*/}
          {/*        </p>*/}
          {/*      </div>*/}
          {/*    </div>*/}
          {/*    <div className="flex flex-wrap">*/}
          {/*      <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">*/}
          {/*        <div className="px-6">*/}
          {/*          <img*/}
          {/*              alt="..."*/}
          {/*              src="/img/team-1-800x800.jpg"*/}
          {/*              className="shadow-lg rounded-full mx-auto max-w-120-px"*/}
          {/*          />*/}
          {/*          <div className="pt-6 text-center">*/}
          {/*            <h5 className="text-xl font-bold">Ryan Tompson</h5>*/}
          {/*            <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">*/}
          {/*              Web Developer*/}
          {/*            </p>*/}
          {/*            <div className="mt-6">*/}
          {/*              <button*/}
          {/*                  className="bg-lightBlue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"*/}
          {/*                  type="button"*/}
          {/*              >*/}
          {/*                <i className="fab fa-twitter"></i>*/}
          {/*              </button>*/}
          {/*              <button*/}
          {/*                  className="bg-lightBlue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"*/}
          {/*                  type="button"*/}
          {/*              >*/}
          {/*                <i className="fab fa-facebook-f"></i>*/}
          {/*              </button>*/}
          {/*              <button*/}
          {/*                  className="bg-pink-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"*/}
          {/*                  type="button"*/}
          {/*              >*/}
          {/*                <i className="fab fa-dribbble"></i>*/}
          {/*              </button>*/}
          {/*            </div>*/}
          {/*          </div>*/}
          {/*        </div>*/}
          {/*      </div>*/}
          {/*      <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">*/}
          {/*        <div className="px-6">*/}
          {/*          <img*/}
          {/*              alt="..."*/}
          {/*              src="/img/team-2-800x800.jpg"*/}
          {/*              className="shadow-lg rounded-full mx-auto max-w-120-px"*/}
          {/*          />*/}
          {/*          <div className="pt-6 text-center">*/}
          {/*            <h5 className="text-xl font-bold">Romina Hadid</h5>*/}
          {/*            <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">*/}
          {/*              Marketing Specialist*/}
          {/*            </p>*/}
          {/*            <div className="mt-6">*/}
          {/*              <button*/}
          {/*                  className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"*/}
          {/*                  type="button"*/}
          {/*              >*/}
          {/*                <i className="fab fa-google"></i>*/}
          {/*              </button>*/}
          {/*              <button*/}
          {/*                  className="bg-lightBlue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"*/}
          {/*                  type="button"*/}
          {/*              >*/}
          {/*                <i className="fab fa-facebook-f"></i>*/}
          {/*              </button>*/}
          {/*            </div>*/}
          {/*          </div>*/}
          {/*        </div>*/}
          {/*      </div>*/}
          {/*      <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">*/}
          {/*        <div className="px-6">*/}
          {/*          <img*/}
          {/*              alt="..."*/}
          {/*              src="/img/team-3-800x800.jpg"*/}
          {/*              className="shadow-lg rounded-full mx-auto max-w-120-px"*/}
          {/*          />*/}
          {/*          <div className="pt-6 text-center">*/}
          {/*            <h5 className="text-xl font-bold">Alexa Smith</h5>*/}
          {/*            <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">*/}
          {/*              UI/UX Designer*/}
          {/*            </p>*/}
          {/*            <div className="mt-6">*/}
          {/*              <button*/}
          {/*                  className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"*/}
          {/*                  type="button"*/}
          {/*              >*/}
          {/*                <i className="fab fa-google"></i>*/}
          {/*              </button>*/}
          {/*              <button*/}
          {/*                  className="bg-lightBlue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"*/}
          {/*                  type="button"*/}
          {/*              >*/}
          {/*                <i className="fab fa-twitter"></i>*/}
          {/*              </button>*/}
          {/*              <button*/}
          {/*                  className="bg-blueGray-700 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"*/}
          {/*                  type="button"*/}
          {/*              >*/}
          {/*                <i className="fab fa-instagram"></i>*/}
          {/*              </button>*/}
          {/*            </div>*/}
          {/*          </div>*/}
          {/*        </div>*/}
          {/*      </div>*/}
          {/*      <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">*/}
          {/*        <div className="px-6">*/}
          {/*          <img*/}
          {/*              alt="..."*/}
          {/*              src="assets/img/team-4-470x470.png"*/}
          {/*              className="shadow-lg rounded-full mx-auto max-w-120-px"*/}
          {/*          />*/}
          {/*          <div className="pt-6 text-center">*/}
          {/*            <h5 className="text-xl font-bold">Jenna Kardi</h5>*/}
          {/*            <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">*/}
          {/*              Founder and CEO*/}
          {/*            </p>*/}
          {/*            <div className="mt-6">*/}
          {/*              <button*/}
          {/*                  className="bg-pink-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"*/}
          {/*                  type="button"*/}
          {/*              >*/}
          {/*                <i className="fab fa-dribbble"></i>*/}
          {/*              </button>*/}
          {/*              <button*/}
          {/*                  className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"*/}
          {/*                  type="button"*/}
          {/*              >*/}
          {/*                <i className="fab fa-google"></i>*/}
          {/*              </button>*/}
          {/*              <button*/}
          {/*                  className="bg-lightBlue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"*/}
          {/*                  type="button"*/}
          {/*              >*/}
          {/*                <i className="fab fa-twitter"></i>*/}
          {/*              </button>*/}
          {/*              <button*/}
          {/*                  className="bg-blueGray-700 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"*/}
          {/*                  type="button"*/}
          {/*              >*/}
          {/*                <i className="fab fa-instagram"></i>*/}
          {/*              </button>*/}
          {/*            </div>*/}
          {/*          </div>*/}
          {/*        </div>*/}
          {/*      </div>*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*</section>*/}

          <section className="pb-20 relative block bg-blueGray-800">
            <div
                className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
                style={{ transform: "translateZ(0)" }}
            >
              <svg
                  className="absolute bottom-0 overflow-hidden"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  version="1.1"
                  viewBox="0 0 2560 100"
                  x="0"
                  y="0"
              >
                <polygon
                    className="text-blueGray-800 fill-current"
                    points="2560 0 2560 100 0 100"
                ></polygon>
              </svg>
            </div>

            <div className="container mx-auto px-4 lg:pt-24 lg:pb-64">

            </div>
          </section>
          <section className="relative block py-24 lg:pt-0 bg-blueGray-800">
            <div className="container mx-auto px-4 mt-10">
              <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200">
                    <div className="flex-auto p-5 lg:p-10">
                      <h4 className="text-2xl font-semibold">
                        تماس با ما
                      </h4>
                      <p className="leading-relaxed mt-1 mb-4 text-blueGray-500">

                        ساعت کاری: شنبه تا پنج شنبه 8 تا 22
                      </p>
                      <div className="relative w-full mb-3 mt-8">
                        <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="full-name"
                        >
                          نام و نام خانوادگی
                        </label>
                        <input
                            type="text"
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            placeholder="نام و نام خانوادگی"
                        />
                      </div>

                      <div className="relative w-full mb-3">
                        <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="email"
                        >
                          ایمیل
                        </label>
                        <input
                            type="email"
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            placeholder="ایمیل"
                        />
                      </div>

                      <div className="relative w-full mb-3">
                        <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="email"
                        >
                          تلفن همراه
                        </label>
                        <input
                            type="email"
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            placeholder="تلفن همراه"
                        />
                      </div>

                      <div className="relative w-full mb-3">
                        <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="message"
                        >
                          پیام
                        </label>
                        <textarea
                            rows="4"
                            cols="80"
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                            placeholder="پیام خود را تایپ کنید..."
                        />
                      </div>
                      <div className="text-center mt-6">
                        <button
                            className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                        >
                          ارسال پیام
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </>
  );
}

export async function getServerSideProps() {
  console.log(`${process.env.API}/fetch-all-courses`)
  const {data} = await axios.get(`${process.env.API}/fetch-all-courses`)

  return {
    props:{
      courses : data
    },
    }
}
