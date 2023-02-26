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
