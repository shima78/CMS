import React from "react";
import {useState, useEffect, useContext} from 'react';
import {Context} from '../../context'
import {useRouter} from 'next/router'

// layout for page

import Auth from "layouts/Auth.js";
import axios from "axios";
import {toast} from  "react-toastify";



export default function Register() {
  const [name, setName] = useState(null)
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)
  const [loading, setLoading] = useState(false)
  const {state, dispatch } = useContext(Context)
  const {user} = state
  const router = useRouter()
  useEffect(() =>{
    if(user !== null){
      router.push("/landing")
    }
  }, [user])
  const handleSubmit =  async (e) => {
    e.preventDefault()
    console.table({name, email, password})
    try {
      setLoading(true);
      console.log(process.env.NEXT_PUBLIC_API)
      //process.env.NEXT_PUBLIC_API+
      const {resp} = await axios.post("/api/register", {
        name,
        email,
        password
      })
      toast.success("با موفقیت ثبت شد. لطفا وارد شوید")
      setLoading(false)
    } catch (err){
      toast.error(err.response.data)
      setLoading(false)
    }
  }
  return (
      <>
        <div className="container mx-auto px-4 h-full">
          <div className="flex content-center items-center justify-center h-full">
            <div className="w-full lg:w-4/12 px-4">
              <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
                <div className="rounded-t mb-0 px-6 py-6">
                  <div className="text-center mb-3">
                    <h6 className="text-blueGray-500 text-sm font-bold">
                      ثبت نام با
                    </h6>
                  </div>
                  <div className="btn-wrapper text-center">
                    <button
                        className="bg-white active:bg-blueGray-50 text-blueGray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                        type="button"
                    >
                      <img
                          alt="..."
                          className="w-5 mr-1"
                          src="/img/github.svg"
                      />
                      Github
                    </button>
                    <button
                        className="bg-white active:bg-blueGray-50 text-blueGray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                        type="button"
                    >
                      <img
                          alt="..."
                          className="w-5 mr-1"
                          src="/img/google.svg"
                      />
                      Google
                    </button>
                  </div>
                  <hr className="mt-6 border-b-1 border-blueGray-300" />
                </div>
                <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                  <div className="text-blueGray-400 text-center mb-3 font-bold">
                    <small>ورود با اطلاعات کاربری</small>
                  </div>
                  <form onSubmit={handleSubmit}>
                    <div className="relative w-full mb-3">
                      <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                      >
                        نام
                      </label>
                      <input
                          type="text"
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          placeholder="نام"
                          value={name}
                          onChange={(e)=> setName(e.target.value)}
                          required
                      />
                    </div>

                    <div className="relative w-full mb-3">
                      <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="grid-password"

                      >
                        ایمیل
                      </label>
                      <input
                          type="email"
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          placeholder="ایمیل"
                          value={email}
                          onChange={(e)=> setEmail(e.target.value)}
                          required

                      />
                    </div>

                    <div className="relative w-full mb-3">
                      <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                      >
                        رمز عبور
                      </label>
                      <input
                          type="password"
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          placeholder="رمز عبور"
                          value={password}
                          onChange={(e)=> setPassword(e.target.value)}
                          required
                      />
                    </div>


                    <div className="text-center mt-6">
                      <button
                          className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                          type="submit"
                          disabled={loading}
                      >

                        {loading? <i className="fas fa-spinner"/> : "ساختن حساب کاربری" }
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
  );
}

Register.layout = Auth;
