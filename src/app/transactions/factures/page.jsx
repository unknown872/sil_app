"use client";
import Layout from '../../../components/layout';
import React, { useState, useEffect } from 'react';
import {
    EyeIcon,
    PencilSquareIcon,
    TrashIcon,
    ArrowLeftIcon, PlusIcon,
    FunnelIcon,
    ChevronDownIcon,
    PlusCircleIcon,
    XCircleIcon,
    MinusCircleIcon
} from "@heroicons/react/24/solid";
import axios from "axios";


const Facture = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [factures, setFactures] = useState([]);
    const [formData, setFormData] = useState({
        structure: '',
        rows: [{ id: 1, nature: '', designation: '', quantity: '', prixU: '', prixT: '' }]
    });

    const handleModal = () => {
        setIsOpen(!isOpen);
    };

    const handleAddRow = () => {
        setFormData({
            ...formData,
            rows: [...formData.rows, { id: formData.rows.length + 1, nature: '', designation: '', quantity: '', prixU: '', prixT: '' }]
        });
    };

    const handleDeleteRow = (id) => {
        setFormData({
            ...formData,
            rows: formData.rows.filter(row => row.id !== id)
        });
    };

    const handleInputChange = (index, fieldName, value) => {
        const updatedRows = formData.rows.map((row, idx) => {
            if (idx === index) {
                return { ...row, [fieldName]: value };
            }
            return row;
        });

        setFormData({
            ...formData,
            rows: updatedRows
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('/api/facture', {
                structure: formData.structure,
                rows: formData.rows
            });
            console.log('Facture ajoutée avec succès:', response.data);
            // Réinitialiser les champs après l'envoi de la requête
            setFormData({
                structure: '',
                rows: [{ id: 1, nature: '', designation: '', quantity: '', prixU: '', prixT: '' }]
            });
            // Peut-être ajouter une logique de succès ou de redirection ici
        } catch (error) {
            console.error('Erreur lors de l\'ajout de la facture:', error);
            // Peut-être ajouter une logique pour gérer l'erreur ici
        }
    };
    const tableItems = [
        {
            id: 1,
            designation: "Facture sur les traveaux effectués sur l'autoroute",
            structure: "Mairie de Dakar",
            date_hour: "25/03/2024 13:09:34"
        },
        {
            id: 2,
            designation: "Construction des Batiments A et B",
            structure: "Mairie de Dakar",
            date_hour: "25/03/2024 13:09:34"
        },
        {
            id: 3,
            designation: "Rénovation de la corniche des Almadies",
            structure: "Mairie de Dakar",
            date_hour: "25/03/2024 13:09:34"
        },
    ]

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/api/facture');
                setFactures(response.data.factures);
                console.log(factures);
            } catch (error) {
                console.error('Error fetching factures:', error);
            }
        };

        fetchData();
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
                    <div className="flex gap-5 items-center mt-3 md:mt-0">
                        <button
                            type="button"
                            onClick={handleModal}
                            className="py-2 px-5 inline-flex items-center rounded-md border border-transparent bg-amber-500 text-sm font-medium text-white shadow-sm hover:bg-indigo-900 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
                        >
                            <PlusIcon className="h-6 w-6 text-slate-50 mr-1" />
                            Ajouter une facture
                        </button>
                    </div>
                </div>
                <div className="mt-2 shadow-sm border rounded-lg overflow-x-auto">
                    <table className="w-full table-auto text-sm text-left">
                        <thead className="bg-gray-50 text-gray-600 font-medium border-b">
                            <tr>
                                <th className="py-3 px-6">Désignation</th>
                                <th className="py-3 px-6">Structure</th>
                                <th className="py-3 px-6">Date et heure de création</th>
                                <th className="py-3 px-6"></th>

                            </tr>
                        </thead>
                        <tbody className="text-gray-600 divide-y">
                            {
                                factures.map((item, idx) => (
                                    <tr key={idx}>
                                        <td className="px-6 py-4 whitespace-nowrap">{item.designation.join(', ')}</td>
                                        <td className="px-6 py-4 whitespace-nowrap">{item.structure}</td>
                                        <td className="px-6 py-4 whitespace-nowrap">{item.createdAt}</td>
                                        <td className="text-right flex items-center whitespace-nowrap">
                                            <a href={`/transactions/factures/details/${item.id}`} className="py-2 px-1 font-medium text-indigo-600 hover:text-indigo-500 duration-150 hover:bg-gray-50 rounded-lg">
                                                <EyeIcon className="h-6 w-6 text-amber-500 hover:text-indigo-900" />
                                            </a>
                                            <a href="#" className="py-2 px-1 font-medium text-indigo-600 hover:text-indigo-500 duration-150 hover:bg-gray-50 rounded-lg">
                                                <PencilSquareIcon className="h-6 w-6 text-amber-500 hover:text-indigo-900" />
                                            </a>
                                            <a href="#" className="py-2 leading-none px-1 font-medium text-red-600 hover:text-red-500 duration-150 hover:bg-gray-50 rounded-lg">
                                                <TrashIcon className="h-6 w-6 text-amber-500 hover:text-indigo-900" />
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
                    <div className="bg-white p-6 rounded-md shadow-md overflow-y-auto max-h-full">
                        <h2 className="text-lg text-indigo-950 font-semibold mb-8 border-b-2 ">Enregistrement de facture</h2>
                        <form action="" className="" onSubmit={handleSubmit}>
                            <div className="mb-4 lg:w-[50%]">
                                <label htmlFor="libelle" className="block text-indigo-950 text-sm font-bold mb-2">
                                    Nom de la structure
                                </label>
                                <input
                                    type="text"
                                    className="shadow appearance-none border rounded w-full py-2 px-3 hover:border-indigo-900 text-indigo-900 leading-tight focus:outline-none focus:shadow-outline"
                                    id="structure"
                                    placeholder="Structure"
                                    value={formData.structure}
                                    required
                                    onChange={(e) => setFormData({ ...formData, structure: e.target.value })}
                                />
                            </div>
                            {formData.rows.map((item, index) => (
                                <div key={index} className="lg:flex mb-4 gap-3">
                                    <div className="mb-1">
                                        <label htmlFor={`designation-${item.id}`} className="block text-indigo-950 text-sm font-bold mb-2">
                                            Désignation
                                        </label>
                                        <input
                                            type="text"
                                            className="shadow appearance-none border rounded w-full py-2 px-3 hover:border-indigo-900 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            id={`designation-${item.id}`}
                                            placeholder="Désignation"
                                            value={item.designation}
                                            onChange={(e) => handleInputChange(index, 'designation', e.target.value)}
                                        />
                                    </div>
                                    <div className="mb-1">
                                        <label htmlFor="libelle" className="block hover:border-indigo-900 text-indigo-950 text-sm font-bold mb-2">
                                            Quantité
                                        </label>
                                        <input
                                            type="number"
                                            className="shadow appearance-none border rounded w-full py-2 px-3 hover:border-indigo-900 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            id={`quantity-${item.id}`}
                                            placeholder="Quantité"
                                            value={item.quantity}
                                            onChange={(e) => handleInputChange(index, 'quantity', e.target.value)}
                                        />
                                    </div>
                                    <div className="mb-1">
                                        <label htmlFor="libelle" className="block hover:border-indigo-900 text-indigo-950 text-sm font-bold mb-2">
                                            Unité de mesure
                                        </label>
                                        <input
                                            type="text"
                                            className="shadow appearance-none border rounded w-full py-2 px-3 hover:border-indigo-900 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            id={`nature-${item.id}`}
                                            placeholder="Unité de mesure"
                                            value={item.nature}
                                            onChange={(e) => handleInputChange(index, 'nature', e.target.value)}
                                        />
                                    </div>
                                    <div className="mb-1">
                                        <label htmlFor="libelle" className="block text-indigo-950 text-sm font-bold mb-2">
                                            Prix U
                                        </label>
                                        <input
                                            type="number"
                                            className="shadow appearance-none border rounded w-full py-2 px-3 hover:border-indigo-900 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            id={`prixU-${item.id}`}
                                            placeholder="Prix Unitaire"
                                            value={item.prixU}
                                            onChange={(e) => handleInputChange(index, 'prixU', e.target.value)}
                                        />
                                    </div>
                                    <div className="mb-1">
                                        <label htmlFor="libelle" className="block text-indigo-950 text-sm font-bold mb-2">
                                            Prix T
                                        </label>
                                        <input
                                            type="number"
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            id={`prixT-${item.id}`}
                                            placeholder="Prix Total"
                                            value={item.prixU * item.quantity}
                                            readOnly
                                        />
                                    </div>
                                    <div className="flex items-center">

                                        <PlusCircleIcon className="h-10 w-10 lg:mt-7 xs:mt-1 text-indigo-900 cursor-pointer" onClick={handleAddRow} />
                                        {index !== 0 && (
                                            <MinusCircleIcon className="h-10 w-10 lg:mt-7 xs:mt-1 text-red-500 cursor-pointer" onClick={() => handleDeleteRow(index)} />

                                        )}
                                    </div>
                                </div>
                            ))}
                            <div className="flex gap-2">
                                <button onClick={handleSubmit} className="mt-4 bg-indigo-900 text-white px-4 py-2 rounded-md hover:bg-amber-500">Valider</button>
                                <button onClick={handleModal} className="mt-4 bg-red-700 text-white px-4 py-2 rounded-md hover:bg-red-900">Fermer</button>
                            </div>
                        </form>

                    </div>
                </div>
            )}
        </Layout>
    )
}
export default Facture