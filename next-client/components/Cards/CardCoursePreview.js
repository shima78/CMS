import {useState, useEffect} from 'react'
import {useRouter} from "next/router"
import axios from "axios"

// components

export default function CardCoursePreview(props) {
    const course = props.course
    const redirect  = props.admin ? "/admin/course/view/"+ course.slug : "/course/"+ course.slug
    return (

          <div className=" relative  mb-4 zoom bg-white " >
              <a href={redirect} >
                  <div className="flex card-landing  bg-white shadow-lg  ">
                      <div className="w-full bg-cover  h-48">
                          <img src="/img/ai_course.jpg"  alt="Product" className="h-48  w-full  "/>
                      </div>
                  </div>
                  <div className=" p-4">
                      <h1 className="text-gray-900 font-bold text-2xl">{course.name}</h1>
                      <p className="mt-2 text-gray-600 text-sm">{course.duration}</p>
                      <div className="flex item-center mt-2">
                          <svg className="w-5 h-5 fill-current text-gray-700" viewBox="0 0 24 24">
                              <path
                                  d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"/>
                          </svg>
                          <svg className="w-5 h-5 fill-current text-gray-700" viewBox="0 0 24 24">
                              <path
                                  d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"/>
                          </svg>
                          <svg className="w-5 h-5 fill-current text-gray-700" viewBox="0 0 24 24">
                              <path
                                  d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"/>
                          </svg>
                          <svg className="w-5 h-5 fill-current text-gray-500" viewBox="0 0 24 24">
                              <path
                                  d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"/>
                          </svg>
                          <svg className="w-5 h-5 fill-current text-gray-500" viewBox="0 0 24 24">
                              <path
                                  d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"/>
                          </svg>
                      </div>
                      <div className="flex item-center justify-between mt-3">

                          {course.free &&
                              <h1
                                  className="text-gray-700 font-bold text-xl">رایگان</h1>}
                          {!course.free &&
                              <h1
                                  className="text-gray-700 font-bold text-xl">{course.price} تومان</h1>}

                      </div>
                  </div>
              </a>
          </div>

    );
}
