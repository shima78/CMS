import React from "react";

export default function Footer() {
  return (
      <>
        <footer className="relative bg-blueGray-200 pt-2 pb-6">
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
                  className="text-blueGray-200 fill-current"
                  points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap text-center lg:text-left">
              <div className="w-full lg:w-6/12 px-4">
                <h4 className="text-3xl font-semibold">با ما در ارتباط باشید!</h4>
                <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
                  ساعت کاری: شنبه تا پنج شنبه 8 تا 22
                </h5>
                <div className="mt-6 lg:mb-0 mb-6">
                  <button
                      className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                      type="button"
                  >
                    <i className="fab fa-twitter"></i>
                  </button>
                  <button
                      className="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                      type="button"
                  >
                    <i className="fab fa-facebook-square"></i>
                  </button>
                  <button
                      className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                      type="button"
                  >
                    <i className="fab fa-instagram"></i>
                  </button>
                  <button
                      className="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                      type="button"
                  >
                    <i className="fab fa-github"></i>
                  </button>
                </div>
              </div>

              <div className="w-full lg:w-6/12  ">
                <div className="flex flex-wrap items-top mb-6">
                  <div className="w-full lg:w-4/12 px-4 ml-auto text-center">
                  <span className="block uppercase text-blueGray-500  font-semibold mb-2">
                    پیوند ها
                  </span>
                    <ul className="list-unstyled -align-right items-center text-center">
                      <li>
                        <a
                            className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                            href="https://www.creative-tim.com/presentation?ref=nr-footer"
                        >
                          دباره ما
                        </a>
                      </li>
                      <li>
                        <a
                            className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                            href="https://blog.creative-tim.com?ref=nr-footer"
                        >
                          بلاگ
                        </a>
                      </li>
                      <li>
                        <a
                            className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                            href="https://www.creative-tim.com/bootstrap-themes/free?ref=nr-footer"
                        >
                          محصولات رایگان
                        </a>
                      </li>
                    </ul>
                  </div>

                </div>
              </div>
            </div>
            <hr className="my-6 border-blueGray-200" />
            <div className="flex flex-wrap items-center md:justify-between justify-center">
              <div className="w-full md:w-4/12 px-4 mx-auto text-center">
                <div className="text-sm text-blueGray-200 font-semibold py-1">
                  Copyright © {new Date().getFullYear()}  by{" "}
                  <a
                      href="https://www.creative-tim.com?ref=nr-footer"
                      className="text-blueGray-200 hover:text-blueGray-200"
                  >
                    Creative Tim
                  </a>
                  .
                </div>
              </div>
            </div>
          </div>
        </footer>
      </>
  );
}
