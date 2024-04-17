"use client";
import Layout from '../../components/layout';
import { useRouter } from 'next/navigation';
import { CalculatorIcon, DocumentTextIcon, ArrowLeftIcon } from '@heroicons/react/24/solid';

const FormTypeSelect = () => {
    const router = useRouter();

    const forms = [
        { id: 1, value: 'factures', title: 'Factures', icon: <DocumentTextIcon className='h-6 w-6' />, details: '', href: '/transactions/factures' },
        { id: 2, value: 'comptabilité', title: 'Comptabilité', icon: <CalculatorIcon className='h-6 w-6'/>, details: '', href: '#' },
    ];

    const handleCardClick = (href) => {
        router.push(href);
    };

    return (
        <Layout>
            <div>
                <ul className="grid gap-6 md:grid-cols-2 p-4">
                    {forms.map((item, index) => (
                        <li key={index} onClick={() => handleCardClick(item.href)} className="cursor-pointer hover:border-2 rounded-md border-amber-500">
                            <div className="border p-6 rounded-md shadow-md bg-indigo-900 hover:text-amber-500">
                                <span className="gap-1 flex text-xl font-semibold text-white mb-2 hover:text-amber-500">
                                    {item.icon}
                                    {item.title}
                                </span>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </Layout>
    );
};

export default FormTypeSelect;
