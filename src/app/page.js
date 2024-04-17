"use client";
import { useRouter } from "next/navigation";
import Layout from "../components/layout";
import Image from "next/image";
import { DocumentDuplicateIcon, UserGroupIcon, UserCircleIcon, EyeIcon } from "@heroicons/react/24/solid";
import { CheckBadgeIcon, UserIcon, PlusIcon, DocumentPlusIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

const Home = () => {

  const router = useRouter();

  const handleButtonEmployee = () => {
    router.push('/employees');
  };
  const cards = [
    {
      name: 'Factures',
      icon: <DocumentDuplicateIcon className="h-8 w-8 text-white" />,
      amount: 5,
      href: "#"
    },
    {
      name: "Utilisateurs",
      icon: <UserGroupIcon className="h-8 w-8 text-white" />,
      amount: 5,
      href: "#",
    },
    {
      name: 'Employés',
      icon: <UserCircleIcon className="h-8 w-8 text-white" />,
      amount: 5,
      href: "/employees",
    },
  ];
  return (
    <Layout title="OneX : Homepage">
      <main>
        <div className="bg-white lg:ml-12 lg:mr-12 shadow">
          <div className="px-6 sm:px-6 xs:px-6 lg:mx-auto lg:max-w-6xl lg:px-8">
            <div className="py-6 md:flex md:items-center md:justify-between lg:border-t lg:border-gray-200">
              <div className="min-w-0 flex-1">
                {/* Profile */}
                <div className="flex items-center">
                  <img
                    className="hidden h-16 w-16 rounded-full sm:block xs:block"
                    src="https://media.istockphoto.com/id/1315385397/photo/shot-of-a-young-businessman-working-on-a-computer-in-an-office.jpg?s=170667a&w=0&k=20&c=fOX7HYIbhTvOs_-uZTAFhDHZo9ouvwGCZJ8_BAYKNi0="
                    alt=""
                  />
                  <div>
                    <div className="flex items-center">
                      <img
                        className="h-16 w-16 rounded-full sm:hidden xs:hidden"
                        src="https://media.istockphoto.com/id/1142003969/photo/close-up-profile-of-handsome-young-black-man-against-isolated-white-background.jpg?b=1&s=170667a&w=0&k=20&c=0cPNaWnMazTu67SRykmLntBTUHqC-_Iif9g93wiHJO0="
                        alt=""
                      />
                      <h1 className="ml-3 text-2xl font-bold leading-7 text-indigo-900 sm:truncate xs:truncate sm:leading-9 xs:leading-9">
                        Bienvenue, Mamadou DIONE

                      </h1>
                    </div>
                    <dl className="mt-6 flex flex-col sm:ml-3 sm:mt-1 sm:flex-row sm:flex-wrap xs:ml-3 xs:mt-1 xs:flex-row xs:flex-wrap">
                      <dt className="sr-only">Company</dt>
                      <dd className="flex items-center text-sm font-medium capitalize text-gray-500 sm:mr-6">
                        <UserIcon
                          className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                          aria-hidden="true"
                        />
                        Adminitrateur
                      </dd>
                      <dt className="sr-only">Account status</dt>
                      <dd className="mt-3 flex items-center text-sm font-medium capitalize text-gray-500 sm:mr-6 sm:mt-0">
                        <CheckBadgeIcon
                          className="mr-1.5 h-5 w-5 flex-shrink-0 text-green-400"
                          aria-hidden="true"
                        />
                        Verified account
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
              <div className="mt-6 flex items-center justify-end space-x-3 md:mt-0 md:ml-4">
                <a
                  href="/transactions/factures"
                  size="sm"
                  type="button"
                  className="py-2 px-5 w-[75%] cursor-pointer hover:text-amber-500 inline-flex items-center rounded-md border border-gray-300 bg-white text-sm font-medium text-indigo-900 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-900 focus:ring-offset-2"
                >
                  <DocumentPlusIcon className="h-6 w-6 mr-1" />
                  Facture
                </a>
                <button
                  size="sm"
                  type="button"
                  onClick={handleButtonEmployee}
                  className="py-2 px-5 w-[75%] inline-flex items-center rounded-md border border-transparent bg-amber-500 text-sm font-medium text-white shadow-sm hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
                >
                  <PlusIcon className="h-6 w-6 text-slate-50 mr-1" />
                  Employé
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-lg font-medium leading-6 text-gray-900">
              Overview
            </h2>
            <div className="mt-2 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {cards.map((card, index) => (
                <div class="flex items-center px-5 py-6 bg-white rounded-md shadow" >
                  <div class="p-3 bg-amber-500 bg-opacity-75 rounded-full">
                    {card.icon}
                  </div>
                  <div class="mx-5">
                    <h4 class="text-2xl font-semibold text-amber-500">5</h4>
                    <div class="text-amber-500">{card.name}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
export default Home