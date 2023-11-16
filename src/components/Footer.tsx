import Image from 'next/image'
import React from 'react'
// bg-[url('/dessert-landscape-2000x1125.jpg')]
//bg-[url('/hero.svg')] bg-[50%] bg-contain bg-no-repeat
const Footer = () => {
    return (
        <footer className="bg-white">

            <div className="flex max-lg:flex-col flex-wrap">
                <div className="basis-1/3 p-2 bg-secondary flex justify-center">
                    <Image alt='dupa' height={100} width={500} src="/hero.svg" className=' mx-auto '></Image>
                </div>
                <div className="basis-2/3 p-4">
                    <div className="px-4 py-8 sm:px-6 lg:col-span-3 lg:px-8">
                        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                            <div>
                                <p>
                                    <span className="text-xs uppercase tracking-wide text-gray-500">
                                        Call us
                                    </span>

                                    <a
                                        href="#"
                                        className="block text-2xl font-medium text-gray-900 hover:opacity-75 sm:text-3xl"
                                    >
                                        0123456789
                                    </a>
                                </p>

                                <ul className="mt-8 space-y-1 text-sm text-gray-700">
                                    <li>Monday to Friday: 10am - 5pm</li>
                                    <li>Weekend: 10am - 3pm</li>
                                </ul>


                            </div>

                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <div>
                                    <p className="font-medium text-gray-900">Services</p>

                                    <ul className="mt-6 space-y-4 text-sm">
                                        <li>
                                            <a href="#" className="text-gray-700 transition hover:opacity-75">
                                                1on1 Coaching
                                            </a>
                                        </li>

                                        <li>
                                            <a href="#" className="text-gray-700 transition hover:opacity-75">
                                                Company Review
                                            </a>
                                        </li>

                                        <li>
                                            <a href="#" className="text-gray-700 transition hover:opacity-75">
                                                Accounts Review
                                            </a>
                                        </li>

                                        <li>
                                            <a href="#" className="text-gray-700 transition hover:opacity-75">
                                                HR Consulting
                                            </a>
                                        </li>

                                        <li>
                                            <a href="#" className="text-gray-700 transition hover:opacity-75">
                                                SEO Optimisation
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                                <div>
                                    <p className="font-medium text-gray-900">Company</p>

                                    <ul className="mt-6 space-y-4 text-sm">
                                        <li>
                                            <a href="#" className="text-gray-700 transition hover:opacity-75">
                                                About
                                            </a>
                                        </li>

                                        <li>
                                            <a href="#" className="text-gray-700 transition hover:opacity-75">
                                                Meet the Team
                                            </a>
                                        </li>

                                        <li>
                                            <a href="#" className="text-gray-700 transition hover:opacity-75">
                                                Accounts Review
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 border-t border-gray-100 pt-12">
                            <div className="sm:flex sm:items-center sm:justify-between">
                                <ul className="flex flex-wrap gap-4 text-xs">
                                    <li>
                                        <a href="#" className="text-gray-500 transition hover:opacity-75">
                                            Terms & Conditions
                                        </a>
                                    </li>

                                    <li>
                                        <a href="#" className="text-gray-500 transition hover:opacity-75">
                                            Privacy Policy
                                        </a>
                                    </li>

                                    <li>
                                        <a href="#" className="text-gray-500 transition hover:opacity-75">
                                            Cookies
                                        </a>
                                    </li>
                                </ul>

                                <p className="mt-8 text-xs text-gray-500 sm:mt-0">
                                    &copy; 2022. Company Name. All rights reserved.
                                </p>
                            </div>
                        </div>
                    </div></div>
            </div>




        </footer>)
}

export default Footer

