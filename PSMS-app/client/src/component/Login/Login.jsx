import React from 'react'
import Image from '../upload/FGorangeNew.png'
import { FaDatabase } from "react-icons/fa";


const Login = () => {
    return (
        <div className='main-div'>
            <section className='card'>
                <div className="p-4 space-y-3 md:space-y-6 sm:p-8">
                    <div className='flex justify-center border-b-[1px] border-gray-300 pb-[20px]'>
                        <a href="#" class="flex items-center text-2xl font-semibold text-gray-900 dark:text-white">
                            <img class="w-[115px] h-[115px] mr-2" src={Image} alt="logo" />
                        </a>
                    </div>
                    <form className="space-y-3 md:space-y-2" action="">
                        <div className='mb-3'>
                            <label for="email" className="label">Database</label>
                            <div className=' input-group'>

                                <input type="text" name="db" id="email" className="form-control" placeholder="Database name" required="" readOnly="readonly" autoFocus />
                                <a role='button' className=' btn-db'>
                                    Select <FaDatabase className='pl-1 i' />
                                </a>

                            </div>

                        </div>
                        <div>
                            <label for="email" className="label">Your email</label>
                            <input type="email" name="email" id="email" className="input-text " placeholder="name@company.com" required="" autoFocus />
                        </div>
                        <div>
                            <label for="password" className="label">Password</label>
                            <input type="password" name="password" id="password" placeholder="••••••••" className="input-text" required="" />
                        </div>
                        <div className='grid mt-3 '>
                            <button type="submit" className="btn-action">Sign in</button>
                            <div className='flex justify-between pt-1'>
                                <a href="#" className='a-link'>Don’t have an account yet?</a>
                                <a href="#" className="a-link ">Reset Password</a>
                            </div>
                        </div>
                        <div className='text-center  mr-1 border-gray-300  border-t-[1px] '>
                            <a href="#" className=" border-gray-300  border-r a-link pe-2 me-[6px] ">Manage Databases</a>
                            <a href="#" className="a-link ">Powered by FGprints</a>
                        </div>

                    </form>
                </div>
            </section>
        </div>
    )
}

export default Login
