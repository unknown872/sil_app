import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
    try {
        const employees = await prisma.employee.findMany(); // Récupérer les données de la base de données
        return NextResponse.json({ employees }); // Renvoyer les données sous forme de réponse JSON
    } catch (error) {
        console.error(error);
        return NextResponse.error('Internal Server Error', 500); // Gérer les erreurs
    }
}

export async function POST({ request }) {
    try {
        const body = await request.json(); // Récupérer les données envoyées dans le corps de la requête
        
        const { name, email, tel, adresse, poste, salaire } = body;
        
        const newEmployee = await prisma.employee.create({
            data: {
                name: body.name,
                email: body.email,
                tel: body.tel,
                adresse: body.adresse,
                poste: body.poste,
                salaire: body.salaire
            }
        });
        return NextResponse.json({ employee: newEmployee }); // Renvoyer la nouvelle facture ajoutée
    } catch (error) {
        console.error(error);
        return NextResponse.error('Internal Server Error', 500); // Gérer les erreurs
    }
}