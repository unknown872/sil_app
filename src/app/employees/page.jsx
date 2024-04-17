"use client";
import React, { useState, useEffect } from 'react';
import Layout from "../../components/layout"
import { EyeIcon, PencilSquareIcon, TrashIcon, ArrowLeftIcon, PlusIcon, XMarkIcon } from "@heroicons/react/24/solid";
import axios from "axios";

const Employee = () => {
    const [employees, setEmployees] = useState([]);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [tel, setTel] = useState('');
    const [adresse, setAdresse] = useState('');
    const [poste, setPoste] = useState('');
    const [salaire, setSalaire] = useState(0);

    const [isOpen, setIsOpen] = useState(false);

    const handleModal = () => {
        setIsOpen(!isOpen);
    }

    const tableItems = [
        {
            avatar: "https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
            name: "Lamine NDIAYE",
            email: "lamine.ndiaye@sil.com",
            phone_nimber: "+221 77 892 20 74",
            position: "Chef de Service",
            salary: "$100K"
        },
        {
            avatar: "https://randomuser.me/api/portraits/men/86.jpg",
            name: "Fatou Sy TRAORE",
            email: "sy.fatou01@sil.com",
            phone_nimber: "+221 77 272 26 34",
            position: "Assistante",
            salary: "$90K"
        },
        {
            avatar: "https://randomuser.me/api/portraits/women/79.jpg",
            name: "Ablaye DIOP",
            email: "diop.ablaye@sil.com",
            phone_nimber: "+221 77 272 26 34",
            position: "Ouvrier",
            salary: "$80K"
        },
        {
            avatar: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
            name: "Mamadou FALL",
            email: "fall.mamadou01@sil.com",
            phone_nimber: "+221 77 272 26 34",
            position: "Peintre",
            salary: "$120K"
        },
    ]

    // Fonction pour récupérer la liste des employés
    const fetchEmployees = async () => {
        try {
            const response = await axios.get('/api/employee');
            setEmployees(response.data.employees);
            console.log(response.data.employees)
            console.log("Employee: ", employees)
        } catch (error) {
            console.error('Erreur lors de la récupération des employés :', error);
        }
    };

    const handleAddEmployee = async () => {
        try {
            // Créer un objet contenant les données de l'employé à ajouter
            const employeeData = {
                name,
                email,
                tel,
                adresse,
                poste,
                salaire
            };

            // Effectuer une requête POST vers l'API backend en utilisant fetch
            const response = await fetch('/api/employee', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(employeeData) // Convertir les données en JSON pour l'envoi
            });

            // Vérifier si la requête a réussi (code de statut 200)
            if (response.ok) {
                // Rafraîchir la liste des employés après l'ajout
                fetchEmployees();

                // Réinitialiser les champs du formulaire
                setName('');
                setEmail('');
                setTel('');
                setAdresse('');
                setPoste('');
                setSalaire('');
            } else {
                // Gérer les cas où la requête a échoué
                console.error('Erreur lors de l\'ajout de l\'employé :', response.statusText);
            }
        } catch (error) {
            console.error('Erreur lors de l\'ajout de l\'employé :', error);
        }
    };

    useEffect(() => {
        fetchEmployees();
    }, []);

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
                            Ajouter un employé
                        </button>
                    </div>
                </div>
                <div className="mt-2 shadow-sm border rounded-lg overflow-x-auto">
                    <table className="w-full table-auto text-sm text-left">
                        <thead className="bg-gray-50 text-gray-600 font-medium border-b">
                            <tr>
                                <th className="py-3 px-6">Nom d'utilisateur</th>
                                <th className="py-3 px-6">Télephone</th>
                                <th className="py-3 px-6">Poste</th>
                                <th className="py-3 px-6">Salaire</th>
                                <th className="py-3 px-6"></th>

                            </tr>
                        </thead>
                        <tbody className="text-gray-600 divide-y">
                            {
                                employees.map((item, idx) => (
                                    <tr key={idx}>
                                        <td className="flex items-center gap-x-3 py-3 px-6 whitespace-nowrap">
                                            <img src={item.avatar} className="w-10 h-10 rounded-full" />
                                            <div>
                                                <span className="block text-gray-700 text-sm font-medium">{item.name}</span>
                                                <span className="block text-gray-700 text-xs">{item.email}</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">{item.tel}</td>
                                        <td className="px-6 py-4 whitespace-nowrap">{item.poste}</td>
                                        <td className="px-6 py-4 whitespace-nowrap">{item.salaire}</td>
                                        <td className="text-right flex items-center whitespace-nowrap">
                                            <a href="javascript:void()" className="py-2 px-1 font-medium text-indigo-600 hover:text-indigo-500 duration-150 hover:bg-gray-50 rounded-lg">
                                                <EyeIcon className="h-6 w-6 text-amber-500" />
                                            </a>
                                            <a href="javascript:void()" className="py-2 px-1 font-medium text-indigo-600 hover:text-indigo-500 duration-150 hover:bg-gray-50 rounded-lg">
                                                <PencilSquareIcon className="h-6 w-6 text-amber-500" />
                                            </a>
                                            <a href="javascript:void()" className="py-2 leading-none px-1 font-medium text-red-600 hover:text-red-500 duration-150 hover:bg-gray-50 rounded-lg">
                                                <TrashIcon className="h-6 w-6 text-amber-500" />
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
                    <div className="bg-white p-6 rounded-md shadow-md ">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-lg font-semibold text-gray-600">Ajouter un employé</h2>
                            <span className="cursor-pointer" onClick={handleModal}>
                                <XMarkIcon className="h-6 w-6 hover:text-black text-gray-500" />
                            </span>
                        </div>
                        <form className="max-w-lg mx-auto" onSubmit={handleAddEmployee}>
                            <div className="mb-2">
                                <label for="name" className="block mb-1 text-sm font-medium text-gray-600 dark:text-white">Nom de l'employé</label>
                                <input
                                    type="text"
                                    id="name"
                                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                    placeholder="Prénom & Nom"
                                    required
                                    value={name}
                                    onChange={e => setName(e.target.value)}
                                />
                            </div>
                            <div className="mb-2">
                                <label for="email" className="block mb-1 text-sm font-medium text-gray-600 dark:text-white">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                    placeholder="exemple@gmail.com"
                                    required
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="mb-2">
                                <label for="tel" className="block mb-1 text-sm font-medium text-gray-600 dark:text-white">Télephone</label>
                                <input
                                    type="tel"
                                    id="tel"
                                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                    placeholder="exemple@gmail.com"
                                    required
                                    value={tel}
                                    onChange={e => setTel(e.target.value)}
                                />
                            </div>
                            <div className="mb-2">
                                <label for="adresse" className="block mb-1 text-sm font-medium text-gray-600 dark:text-white">Adresse</label>
                                <input
                                    type="text"
                                    id="adresse"
                                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                    placeholder="exemple@gmail.com"
                                    required
                                    value={adresse}
                                    onChange={e => setAdresse(e.target.value)}
                                />
                            </div>
                            <div className="flex gap-2">
                                <div className="mb-2">
                                    <label for="poste" className="block mb-1 text-sm font-medium text-gray-600 dark:text-white">Poste occupé</label>
                                    <input
                                        type="text"
                                        id="poste"
                                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                        placeholder="Poste"
                                        required
                                        value={poste}
                                        onChange={e => setPoste(e.target.value)}
                                    />
                                </div>
                                <div className="mb-2">
                                    <label for="salaire" className="block mb-1 text-sm font-medium text-gray-600 dark:text-white">Salaire</label>
                                    <input
                                        type="number"
                                        id="salaire"
                                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                        placeholder="500000"
                                        required
                                        value={salaire}
                                        onChange={e => setSalaire(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="flex-inline">
                                <button onClick={handleModal} className="font-bold">Annuler</button>
                                <button type="submit" className="mt-4 ml-3 bg-amber-500 rounded-full text-white px-4 py-2 hover:bg-indigo-900">Enregistrer</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </Layout>
    )
}
export default Employee