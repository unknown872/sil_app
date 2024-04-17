"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import SIL from '../../../../../assets/SIL-1.png';
import Image from 'next/image';
import Layout from '../../../../../components/layout';
import { NumberToLetter } from "@mandarvl/convertir-nombre-lettre";
import { ArrowLeftIcon } from '@heroicons/react/24/solid';
import jsPDF from 'jspdf';

const Details = ({ params }) => {
  const router = useRouter();
  const [data] = useState(
    {
      id: 1,
      designation: "Facture sur les traveaux effectués sur l'autoroute",
      structure: "Mairie de Dakar",
      date_hour: "25/03/2024 13:09:34",
      quantity: 400,
      prixU: 500,
      prixT: 200000,
      nature: 'ml',
    },
    {
      id: 2,
      designation: "Construction des Batiments A et B",
      structure: "Mairie de Dakar",
      date_hour: "25/03/2024 13:09:34",
      quantity: 300,
      prixU: 200,
      prixT: 60000,
      nature: 'ml',
    },
    {
      id: 3,
      designation: "Rénovation de la corniche des Almadies",
      structure: "Mairie de Dakar",
      date_hour: "25/03/2024 13:09:34",
      quantity: 100,
      prixU: 200,
      prixT: 20000,
      nature: 'ml',
    }
  );

  const somme = NumberToLetter(data.prixU);

  const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const dateString = "25/03/2024 13:09:34";
  const dateParts = dateString.split("/");
  const datePart = dateString.split(" "); // Diviser la chaîne en parties séparées par "/"
  const day = dateParts[0]; // Le premier élément est le jour
  const monthIndex = parseInt(dateParts[1]) - 1; // Le deuxième élément est le mois (soustrayez 1 car les indices de tableau commencent à 0)
  const year = dateParts[2].substring(0, 4); // Le troisième élément contient l'année, nous prenons les 4 premiers caractères pour obtenir l'année
  const days = datePart[2, 1, 0]

  const months = [
    "janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"
  ];

  const monthName = months[monthIndex];

  const formattedDate = `${day} ${monthName} ${year}`;

  return (
    <Layout>
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
      <div className='flex pt-13 lg:pl-1 pl-10 items-center justify-center overflow-auto max-h-full'>
        <div>
          <div className='flex items-center justify-center'>
            <Image className='h-30 w-40' src={SIL} />
          </div>
          <div className='flex items-center justify-center flex-col'>
            <div className=''>
              <h1 className='font-bold text-center'><span className='text-2xl'>S</span>énégalaise de l’<span className='text-2xl'>I</span>ngénierie et de la <span className='text-2xl'>L</span>ogistique</h1>
              <p className='text-center'>Adresse : 121, Av Hyacinthe Thiandoum, Route des Niayes Grand-Yoff</p>
              <p className='text-center'>Tel : 33 867 68 69 - 77 381 81 05 – 70 701 99 01</p>
              <p className='text-center'>Email : silsenegal@sil-sarl.com</p>
            </div>
            <div className='border-2 border-black w-[90%] m-3'></div>
            <div className='ml-auto'>
              <p className=''>Dakar, le {formattedDate}</p>
              <p className='ml-9 uppercase font-bold'>{data.structure}</p>
            </div>
            <div className='mt-6'>
              <p className='font-bold text-center'>Devis N°{days}</p>
              <div className="">
                <table className=" border border-collapse border-black-300">
                  <thead>
                    <tr>
                      <th className="px-4 lg:px-10 py-2 border border-black">Designation</th>
                      <th className="px-4 lg:px-10 py-2 border border-black">Quantite</th>
                      <th className="px-4 lg:px-10 py-2 border border-black">Prix Unitaire</th>
                      <th className="px-4 lg:px-10 py-2 border border-black">Prix Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="px-4 lg:px-10 py-2 border border-black">{data.designation}</td>
                      <td className="px-4 lg:px-10 py-2 border border-black">{data.quantity} {data.nature}</td>
                      <td className="px-4 lg:px-10 py-2 border border-black">{data.prixU}</td>
                      <td className="px-4 lg:px-10 py-2 border border-black">{data.prixU * data.quantity}</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border border-black text-center" colSpan="3">TOTAL HTVA</td>
                      <td className="px-4 py-2 border border-black text-center">{data.prixU * data.quantity}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className='mr-auto mt-6'>
              <p>Arrêté la présente facture à la somme de :</p>
              <p>{capitalizeFirstLetter(somme)} FCFA.</p>
            </div>
          </div>
        </div>

      </div>
    </Layout>
  )
}

export default Details
