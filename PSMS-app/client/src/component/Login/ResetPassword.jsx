import React from 'react'
import Image from '../upload/FGorangeNew.png'
const ResetPassword = () => {
    return (
        <div className='main-div'>
            <section className="bg-gray-50 dark:bg-gray-900">
                <div className="w-full p-6 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700 sm:p-8">
                    <div className='flex justify-center border-b-[1px] border-gray-300 pb-[20px]'>
                        <a href="#" class="flex items-center mb-3 text-2xl font-semibold text-gray-900 dark:text-white">
                            <img class="w-[115px] h-[115px] mr-2" src={Image} alt="logo" />
                        </a>
                    </div>
                    <form className="mt-4 space-y-3 lg:mt-5 md:space-y-2" action="#">
                        <div>
                            <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                            <input type="email" name="email" id="email" className="input-text" placeholder="name@company.com" required="" />
                        </div>
                        <div>
                            <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">New Password</label>
                            <input type="password" name="password" id="password" placeholder="••••••••" className="input-text" required="" />
                        </div>
                        <div>
                            <label for="confirm-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                            <input type="confirm-password" name="confirm-password" id="confirm-password" placeholder="••••••••" className="input-text" required="" />
                        </div>

                        <div className='grid mt-3'>
                            <button type="submit" className="btn-action">Reset password</button>
                            <div className='flex justify-between pt-1'>
                                <a href="#" className='a-link'>Back to Login</a>
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

export default ResetPassword
