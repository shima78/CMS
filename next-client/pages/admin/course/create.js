import React from "react";
import { useState, useContext, useEffect } from "react";
import { Context } from "../../../context";
import axios from "axios";
import UserRoute from "../../../components/routes/UserRoute"
import {toast} from "react-toastify"

// components

import CardLineChart from "components/Cards/CardLineChart.js";
import CardBarChart from "components/Cards/CardBarChart.js";
import CardPageVisits from "components/Cards/CardPageVisits.js";
import CardSocialTraffic from "components/Cards/CardSocialTraffic.js";

// layout for page

import Admin from "layouts/Admin.js";

export default function Dashboard() {
    // state
    const [values, setValues] = useState({
        name: "",
        instructors : [],
        description: "",
        duration : "",
        price: "9999",
        uploading: false,
        free: false,
        loading: false,
        imagePreview: "",
    });
    const [counter, setCounter] = useState(1);
    const [instructorsInput, setInstructorsInput] = useState([]);

    const addInstructor = () => {
        setCounter(counter + 1);
    };

    const handleOnInstructorChange = (e) => {
        const temp = instructorsInput
        temp[e.target.name] = e.target.value
        setInstructorsInput(temp)
        setValues({ ...values, instructors: instructorsInput });
        console.log(values)
    };

    const removeInstructor = (index) => (e) =>{
        setCounter(counter-1)
        console.log("counter",counter)
        console.log("inputs", instructorsInput)
        console.log()
        const temp = instructorsInput
        console.log(temp, index)
        temp.splice(index,1)
        console.log(temp)
        setInstructorsInput(temp)
        setValues({ ...values, instructors: instructorsInput });
    }

    const handleChange = (e) => {
        if(e.target.name === "free"){
            console.log(e.target.checked)
            setValues({ ...values, [e.target.name]: !values.free});
        }
        else {
            setValues({...values, [e.target.name]: e.target.value});
        }
        console.log(values)
    };

    const handleImage = () => {
        //
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // console.log(values);
            const { data } = await axios.post("/api/course", {
                ...values,
            });
            toast("با موفقیت ایجاد شد.");

        } catch (err) {
            toast(err.response.data);
        }
    };


    const courseCreateForm = () => (
        <>
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
                <div className="rounded-t bg-white mb-0 px-6 py-6">
                    <div className="text-center flex justify-between">
                        <h6 className="text-blueGray-700 text-xl font-bold">ایجاد دوره جدید</h6>
                    </div>
                </div>
                <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                    <form onSubmit={handleSubmit}>
                        <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                            اطلاعات دوره
                        </h6>
                        <div className="flex flex-wrap">
                            <div className="w-full lg:w-6/12 px-4">
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                    >
                                        عنوان
                                    </label>
                                    <input
                                        name="name"
                                        type="text"
                                        className="border-0 px-3 py-3 placeholder-blueGray-400 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                        placeholder="عنوان"
                                        value={values.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="w-full lg:w-6/12 px-4">
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                    >
                                        مدت زمان
                                    </label>
                                    <input
                                        name="duration"
                                        type="text"
                                        className="border-0 px-3 py-3 placeholder-blueGray-400 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                        placeholder="مدت زمان"
                                        value={values.duration}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="w-full lg:w-6/12 px-4">
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                    >
                                          قیمت (تومان)
                                    </label>
                                    <input
                                        name="price"
                                        type="text"
                                        className="border-0 px-3 py-3 placeholder-blueGray-400 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                        placeholder="0"
                                        value={values.price}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="w-full lg:w-6/12 px-4">
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                    >
                                          ارائه به صورت رایگان
                                    </label>

                                    <label className="switch mt-2">
                                        <input type="checkbox"
                                               name="free"
                                               onChange={handleChange}
                                        />
                                            <span className="slider round"/>
                                    </label>

                                </div>
                            </div>
                        </div>

                        <hr className="mt-6 border-b-1 border-blueGray-300" />

                        <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                            توضیحات
                        </h6>
                        <div className="flex flex-wrap">
                            <div className="w-full lg:w-12/12 px-4">
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                    >
                                        توضیحات
                                    </label>
                                    <textarea
                                        type="text"
                                        className="border-0 px-3 py-3 placeholder-blueGray-400 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                        name="description"
                                        cols="7"
                                        rows="7"
                                        value={values.description}
                                        onChange={handleChange}
                                        required

                                    />
                                </div>
                            </div>
                        </div>
                        <hr className="mt-6 border-b-1 border-blueGray-300" />

                        <div className="text-center flex justify-between">
                            <h6 className="text-blueGray-400  text-sm mt-3 mb-6 font-bold uppercase">مدرس ها</h6>
                            <button
                                className="btn-add  mt-3 mb-4 px-3 text-white
                                 font-bold uppercase text-xs  rounded shadow hover:shadow-md outline-none
                                 focus:outline-none mr-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={addInstructor}
                            >
                                <i className="fa fa-plus ml-1"/>
                                مدرس
                            </button>
                        </div>

                        <div className="flex flex-wrap" id="instructor-section">
                            {
                                Array.from( { length: counter}).map((c,index) => {
                                        return (
                                            <div className="w-full lg:w/12 px-4" key={index}>
                                                <div className="relative w-full mb-3 ">
                                                    <label
                                                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                                        htmlFor="grid-password"
                                                    >
                                                        نام مدرس
                                                    </label>
                                                    <input
                                                        name={index.toString()}
                                                        required
                                                        type="text"
                                                        className="border-0 px-3 py-3 placeholder-blueGray-400
                                                        text-blueGray-600 bg-white rounded text-sm shadow
                                                        focus:outline-none focus:ring w-10/12 ease-linear
                                                        transition-all duration-150"
                                                        placeholder="نام"
                                                        value={instructorsInput[index]}
                                                        onChange={handleOnInstructorChange}
                                                    />
                                                    <button
                                                        className="btn-remove py-1  px-2 text-white
                                                    font-bold uppercase text-xs
                                                     rounded shadow hover:shadow-md outline-none
                                                        focus:outline-none mr-3 ease-linear transition-all duration-150"
                                                        type="button"
                                                        onClick={removeInstructor(index)}
                                                    >
                                                        <i className="fa fa-minus "/>
                                                    </button>
                                                </div>
                                            </div>
                                        )
                                    }

                                )
                            }
                        </div>
                        <hr className="mt-6 border-b-1 border-blueGray-300" />

                        <button
                            className="btn-add  mt-4 px-6 py-3 text-white
                                 font-bold uppercase   rounded shadow hover:shadow-md outline-none
                                 focus:outline-none mr-1 ease-linear transition-all duration-150"
                            type="submit"
                        >
                         ذخیره دوره
                        </button>

                    </form>
                </div>
            </div>
        </>
    );


    return (
        <UserRoute>

            <div className="flex flex-wrap mt-4">
                <div className="w-full  mb-12 xl:mb-0 px-4">
                    <h1 className="jumbotron text-center square">Create Course</h1>
                    <div className="pt-3 pb-3">{courseCreateForm()}</div>
                </div>

            </div>
        </UserRoute>

    );
}

Dashboard.layout = Admin;


