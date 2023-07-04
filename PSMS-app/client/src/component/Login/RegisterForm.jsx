import React from 'react'
import Image from '../upload/FGorangeNew.png'

const RegisterForm = () => {
    return (
        <div className='main-div'>
            <section className="bg-gray-50 dark:bg-gray-900">
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <div className='flex justify-center border-b-[1px] border-gray-300 pb-[20px]'>
                            <a href="#" class="flex items-center mb-3 text-2xl font-semibold text-gray-900 dark:text-white">
                                <img class="w-[115px] h-[115px] mr-2" src={Image} alt="logo" />
                            </a>
                        </div>
                        <form className="space-y-3 md:space-y-2" action="#">
                            <div>
                                <label for="email" className="label">Your email</label>
                                <input type="email" name="email" id="email" className="input-text" placeholder="name@company.com" required="" />
                            </div>
                            <div>
                                <label for="password" className="label">Password</label>
                                <input type="password" name="password" id="password" placeholder="••••••••" className="input-text" required="" />
                            </div>
                            <div>
                                <label for="confirm-password" className="label">Confirm password</label>
                                <input type="confirm-password" name="confirm-password" id="confirm-password" placeholder="••••••••" className="input-text" required="" />
                            </div>

                            <div className='grid text-center '>
                                <button type="submit" className="btn-action">Create an account</button>
                                <a href="#" className="pt-1 a-link">Already have an account?</a>
                            </div>
                            <div className='text-center   mt-1 mr-1 border-gray-300  border-t-[1px] '>
                                <a href="#" className=" border-gray-300  border-r a-link pe-2 me-[6px] ">Manage Databases</a>
                                <a href="#" className="a-link ">Powered by FGprints</a>
                            </div>

                        </form>
                    </div>
                </div>

            </section>
        </div>
    )
}

export default RegisterForm
