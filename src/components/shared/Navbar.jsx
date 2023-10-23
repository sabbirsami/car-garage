import { useState } from "react";
import { VscMenu, VscChromeClose } from "react-icons/vsc";
import logo from "../../assets/logo.png";

const Navbar = () => {
    const [show, setShow] = useState(false);
    console.log(show);
    return (
        <header className="bg-white">
            <nav
                className="flex  items-center justify-between p-6 lg:px-8"
                aria-label="Global"
            >
                <div className="flex lg:flex-1">
                    <a href="#" className="-m-1.5 p-1.5">
                        <span className="sr-only">Your Company</span>

                        <img className="h-12 w-auto" src={logo} alt="" />
                    </a>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        onClick={() => setShow(true)}
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                    >
                        <span className="sr-only">Open main menu</span>
                        <VscMenu className="inline text-2xl" />
                    </button>
                </div>
                <div className="hidden lg:flex lg:gap-x-12">
                    <a
                        href="#"
                        className="text-sm font-semibold leading-6 text-gray-900"
                    >
                        Home
                    </a>
                    <a
                        href="#"
                        className="text-sm font-semibold leading-6 text-gray-900"
                    >
                        About
                    </a>
                    <a
                        href="#"
                        className="text-sm font-semibold leading-6 text-gray-900"
                    >
                        Services
                    </a>
                    <a
                        href="#"
                        className="text-sm font-semibold leading-6 text-gray-900"
                    >
                        Blog
                    </a>
                    <a
                        href="#"
                        className="text-sm font-semibold leading-6 text-gray-900"
                    >
                        Contact
                    </a>
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <a
                        href="#"
                        className="text-sm font-semibold leading-6 text-gray-900"
                    >
                        Appointment
                    </a>
                </div>
            </nav>

            {show && (
                <div className="lg:hidden" role="dialog" aria-modal="true">
                    <div className="fixed inset-0 z-10"></div>
                    <div className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                        <div className="flex items-center justify-between">
                            <a href="#" className="-m-1.5 p-1.5">
                                <span className="sr-only">Your Company</span>
                                <img
                                    className="h-12 w-auto"
                                    src={logo}
                                    alt=""
                                />
                            </a>
                            <button
                                type="button"
                                onClick={() => setShow(false)}
                                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            >
                                <span className="sr-only">Close menu</span>
                                <VscChromeClose className="inline text-2xl" />
                            </button>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-gray-500/10">
                                <div className="space-y-2 py-6">
                                    <a
                                        href="#"
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                    >
                                        Features
                                    </a>
                                    <a
                                        href="#"
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                    >
                                        Marketplace
                                    </a>
                                    <a
                                        href="#"
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                    >
                                        Company
                                    </a>
                                </div>
                                <div className="py-6">
                                    <a
                                        href="#"
                                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                    >
                                        Log in
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Navbar;
