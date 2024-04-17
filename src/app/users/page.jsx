"use client";
import Layout from "../../components/layout"
import { EyeIcon, PencilSquareIcon, TrashIcon, ArrowLeftIcon, PlusIcon, LockClosedIcon, LockOpenIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

const User = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleModal = () => {
        setIsOpen(!isOpen);
    }

    const tableItems = [
        {
            avatar: "https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
            name: "Fatou Sy TRAORE",
            email: "sy.fatou01@sil.com",
            phone_nimber: "+221 77 272 26 34",
            position: "Assistante",
            status: "inactive",
            salary: "$90K"
        },
        {
            avatar: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
            name: "Mamadou DIONE",
            email: "dione.mamadou@sil.com",
            phone_nimber: "+221 77 272 26 34",
            position: "CEO",
            status: "active",
            salary: "$80K"
        },
    ]

    return (
        <Layout>
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="items-start justify-between md:flex">
                    <div className="mt-3 md:mt-0">
                        <button
                            type="button"
                            className="py-2 px-5 inline-flex items-center rounded-md border border-transparent bg-amber-500 text-sm font-medium text-white shadow-sm hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
                        >
                            <ArrowLeftIcon className="h-6 w-6 text-slate-50 mr-1" />
                            Retour
                        </button>
                    </div>
                </div>
                <div className="items-start justify-between md:flex mt-12">
                    <div className="mt-3 md:mt-0">
                        <div className="relative">
                            <svg xmlns="http://www.w3.org/2000/svg" className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                            <input
                                type="text"
                                placeholder="Search"
                                className="w-full py-2 pl-12 pr-4 text-indigo-950 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-amber-500"
                            />
                        </div>
                    </div>
                    <div className="mt-3 md:mt-0">
                        <button
                            type="button"
                            onClick={handleModal}
                            className="py-2 px-5 inline-flex items-center rounded-md border border-transparent bg-amber-500 text-sm font-medium text-white shadow-sm hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
                        >
                            <PlusIcon className="h-6 w-6 text-slate-50 mr-1" />
                            Ajouter un utilisateur
                        </button>
                    </div>
                </div>
                <div className="mt-4 shadow-sm border rounded-lg overflow-x-auto">
                    <table className="w-full table-auto text-sm text-left">
                        <thead className="bg-gray-50 text-gray-600 font-medium border-b">
                            <tr>
                                <th className="py-3 px-6">Nom d'utilisateur</th>
                                <th className="py-3 px-6">Poste</th>
                                <th className="py-3 px-6">Statut du compte</th>
                                <th className="py-3 px-6"></th>

                            </tr>
                        </thead>
                        <tbody className="text-gray-600 divide-y">
                            {
                                tableItems.map((item, idx) => (
                                    <tr key={idx}>
                                        <td className="flex items-center gap-x-3 py-3 px-6 whitespace-nowrap">
                                            <img src={item.avatar} className="w-10 h-10 rounded-full" />
                                            <div>
                                                <span className="block text-gray-700 text-sm font-medium">{item.name}</span>
                                                <span className="block text-gray-700 text-xs">{item.email}</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">{item.position}</td>
                                        <td className="px-6 py-4 whitespace-nowrap">{item.status}</td>
                                        <td className="text-right flex items-center whitespace-nowrap">
                                            <a href="#" className="py-2 px-1 font-medium text-indigo-600 hover:text-indigo-500 duration-150 hover:bg-gray-50 rounded-lg">
                                                {
                                                    item.status === "active" ? (
                                                        <LockOpenIcon className="h-6 w-6 text-amber-500" />
                                                    ) : (
                                                        <LockClosedIcon className="h-6 w-6 text-amber-500" />
                                                    )
                                                }
                                            </a>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            {isOpen && (
                <div className="fixed top-0 left-0 w-full h-full bg-amber-950 bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-md shadow-md">
                        <h2 className="text-lg font-semibold mb-4">Add</h2>
                        <p>Modal User...</p>

                        <form class="max-w-sm mx-auto">
                            <label for="website-admin" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
                            <div class="flex">
                                <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                                    <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                                    </svg>
                                </span>
                                <input type="text" id="website-admin" class="rounded-none rounded-e-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Bonnie Green"/>
                            </div>
                        </form>

                        <button onClick={handleModal} className="mt-4 bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-gray-600">Close</button>
                    </div>
                </div>
            )}

        </Layout>
    )
}
export default User