import {useState, useEffect} from 'react'
import axios from "axios"

export default function AddLessonModal(
    {showModal,setShowModal,
        modalTitle,
        handleAddLesson,
        lesson, setLesson
    }
    ) {
    return (
        <>
            {showModal ? (
                <>
                    <div
                        className="justify-center lg:w-9/12 mr-4 items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none p-3"
                    >
                        <div className=" w-full  my-6 mx-auto">
                            {/*content*/}
                            <div className="border-0 bg-blueGray-100 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                    <h3 className="text-xl font-semibold">
                                        {modalTitle}
                                    </h3>
                                    <button
                                        className="p-1  bg-transparent border-0 text-black opacity-5 float-left text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => setShowModal(false)}
                                    >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                                    </button>
                                </div>
                                {/*body*/}
                                <div className="flex-auto px-4 lg:px-10 py-10 pt-2">
                                    <form>
                                        <div className="flex flex-wrap">
                                            <div className="w-full lg:w-6/12 px-4">
                                                <div className="relative w-full mb-3">
                                                    <label
                                                        className="block uppercase text-blueGray-600  font-bold mb-2"
                                                    >
                                                        عنوان
                                                    </label>
                                                    <input
                                                        name="title"
                                                        type="text"
                                                        className="border-0 px-3 py-3 placeholder-blueGray-400 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                        placeholder="عنوان"
                                                        value={lesson.title}
                                                        required
                                                        onChange={(e) => setLesson({ ...lesson, title: e.target.value })}
                                                    />
                                                </div>
                                            </div>
                                            <div className="w-full lg:w-6/12 px-4">
                                                <div className="relative w-full mb-3">
                                                    <label
                                                        className="block uppercase text-blueGray-600  font-bold mb-2"
                                                    >
                                                        متن
                                                    </label>
                                                    <input
                                                        name="content"
                                                        type="text"
                                                        className="border-0 px-3 py-3 placeholder-blueGray-400 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                        placeholder="متن"
                                                        value={lesson.content}
                                                        onChange={(e) => setLesson({ ...lesson, content: e.target.value })}
                                                        required
                                                    />
                                                </div>
                                            </div>

                                        </div>
                                    </form>
                                </div>
                                {/*footer*/}
                                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                    <button
                                        className="text-red-500 m-3 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        انصراف
                                    </button>
                                    <button
                                        className="bg-emerald-500 m-3 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={handleAddLesson}
                                    >
                                        ذخیره
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
    );
}