"use client";
import Image from 'next/image';
import React, { useState } from 'react';
import Profile from '../../src/assets/profil.png'
import { Squares2X2Icon } from "@heroicons/react/24/solid";
import { UsersIcon } from "@heroicons/react/24/solid";
import { DocumentTextIcon } from "@heroicons/react/24/solid";
import { Bars3BottomLeftIcon, ArrowsUpDownIcon } from "@heroicons/react/24/solid";
import { PowerIcon } from "@heroicons/react/24/solid";
import { HomeIcon } from "@heroicons/react/24/solid";
import { Cog8ToothIcon } from "@heroicons/react/24/solid";
import SIL from "../../src/assets/SIL-1.png";

const Menu = ({ children }) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [profilItem, setProfilItem] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    const toggleProfil = () => {
        setProfilItem(!profilItem);
    };

    const closeSidebar = () => {
        setSidebarOpen(false);
    };

    const navbarItems = [
        {
            title: 'Dashboard',
            icon: <HomeIcon className="h-6 w-6 text-indigo-900" />,
            link: '#'
        },
        {
            title: 'Parametres',
            icon: <Cog8ToothIcon className="h-6 w-6 text-indigo-900" />,
            link: '#'
        },
        {
            title: 'Déconnexion',
            icon: <PowerIcon className="h-6 w-6 text-indigo-900" />,
            link: '#'
        }
    ];

    const sidebarItems = [
        {
            title: 'Dashboard',
            icon: <Squares2X2Icon className="h-6 w-6 text-indigo-900" />,
            link: '/'
        },
        {
            title: 'Utilisateurs',
            icon: <UsersIcon className="h-6 w-6 text-indigo-900" />,
            link: '/users'
        },
        {
            title: 'Transactions',
            icon: <ArrowsUpDownIcon className="h-6 w-6 text-indigo-900" />,
            link: '/transactions'
        },
    ];

    return (
        <div>
            <header>
                <nav className="fixed top-0 z-50 w-full lg:px-10 md:px-10 bg-white border-b-2 border-gray-300 dark:bg-gray-800 dark:border-gray-700">
                    <div className="px-3 py-3 lg:px-5 lg:pl-3">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center justify-start rtl:justify-end">
                                <button
                                    onClick={toggleSidebar}
                                    type="button"
                                    className="inline-flex items-center p-2 text-sm text-slate-900 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                                >
                                    <span className="sr-only">Open sidebar</span>
                                    <Bars3BottomLeftIcon className="h-6 w-6 text-gray-500" />
                                </button>
                                <a href="/" className="flex ms-2 md:me-24">
                                    <Image src={SIL} alt='SIL' width={100} height={40} />
                                </a>
                            </div>
                            <div className="flex items-center">
                                <div className="flex items-center ms-3">
                                    <div>
                                        <button
                                            onClick={toggleProfil}
                                            type="button"
                                            className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                                        >
                                            <span className="sr-only">Open user menu</span>
                                            <Image className="w-8 h-8 rounded-full" src={Profile} alt="user photo" />
                                        </button>
                                    </div>
                                    {
                                        profilItem && (

                                            <div className="absolute top-full right-0 z-50 mt-2 text-base bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600" id="dropdown-user">
                                                <div className="px-4 py-3" role="none">
                                                    <p className="text-sm text-gray-900 dark:text-white" role="none">
                                                        Mamadou Dione
                                                    </p>
                                                    <p className="text-sm font-medium text-gray-900 truncate dark:text-gray-300" role="none">
                                                        dione.mamadou@sil.com
                                                    </p>
                                                </div>
                                                <ul className="py-1" role="none">
                                                    {navbarItems.map((item, index) => (
                                                        <li key={index}>
                                                            <a href={item.link} className="flex items-center px-4 py-2 text-sm text-indigo-900 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
                                                                {item.icon}
                                                                <span className='ms-1 font-semibold text-indigo-900'>{item.title}</span>
                                                            </a>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
            <main>
                {sidebarOpen && (
                    <div
                        className="fixed top-0 left-0 z-30 w-full h-full bg-black opacity-50"
                        onClick={closeSidebar}
                    />
                )}
                <aside
                    id="logo-sidebar"
                    className={`fixed top-0 md:pl-5 lg:pl-5 md:top-auto md:top lg:top-auto lg:top left-0 z-40 w-80 h-full lg:w-80 lg:h-3/5 md:w-80 md:h-3/5 lg:pt-1 md:pt-1 pt-10 transition-transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} sm:translate-x-0`}
                >
                    <div className="h-full px-5 pb-4 pt-10 md:pt-20 lg:pt-20 overflow-y-auto md:border md:rounded-xl lg:border lg:rounded-xl border-slate-300 bg-white dark:bg-gray-800">
                        <div className="flex flex-shrink-0 items-center justify-center px-4">
                            <Image className="h-30 w-auto" src={SIL} alt="SIL" />
                        </div>
                        <ul className="space-y-2 pt-4 font-medium">
                            {sidebarItems.map((item, index) => (
                                <li key={index}>
                                    <a href={item.link} className="flex items-center p-2 text-indigo-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                        {item.icon}
                                        <span className="ms-3">{item.title}</span>
                                        {item.badge && (
                                            <span className="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">{item.badge}</span>
                                        )}
                                    </a>
                                </li>
                            ))}
                        </ul>
                        <div className="flex flex-shrink-0 border-t border-gray-200 p-4 lg:mt-6 md:mt-6 xs:mt-10">
                            <a href="#" className="group block w-full flex-shrink-0">
                                <div className="flex items-center">
                                    <div>
                                        <Image
                                            className="inline-block h-9 w-9 rounded-full"
                                            src={Profile}
                                            alt="SIL"
                                        />
                                    </div>
                                    <div className="ml-3">
                                        <p className="text-sm font-medium text-indigo-900 group-hover:text-gray-900">
                                            Mamadou DIONE
                                        </p>
                                        <p className="text-xs font-medium text-gray-500 group-hover:text-gray-700">
                                            Voir le profil
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>

                </aside>
                <div className="p-4 mt-20 md:mt-24 lg:mt-24 lg:ml-80 md:ml-80">
                    {children}
                </div>

            </main>
        </div>
    );
}

export default Menu