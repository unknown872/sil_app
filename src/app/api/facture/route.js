import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
    try {
        const factures = await prisma.facture.findMany(); // Récupérer les données de la base de données
        return NextResponse.json({ factures }); // Renvoyer les données sous forme de réponse JSON
    } catch (error) {
        console.error(error);
        return NextResponse.error('Internal Server Error', 500); // Gérer les erreurs
    }
}
export async function POST({ request }) {
    try {
        const body = await request.json(); // Récupérer les données envoyées dans le corps de la requête
        // Insérer la nouvelle facture dans la base de données
        const newFacture = await prisma.facture.create({
            data: {
                structure: body.structure,
                nature: body.nature,
                designation: body.designation,
                quantity: body.quantity,
                prixU: body.prixT,
                prixT: body.prixT
            }
        });
        return NextResponse.json({ facture: newFacture }); // Renvoyer la nouvelle facture ajoutée
    } catch (error) {
        console.error(error);
        return NextResponse.error('Internal Server Error', 500); // Gérer les erreurs
    }
}


