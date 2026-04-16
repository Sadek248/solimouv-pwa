import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, message } = body;

        if (!name || !email || !message) {
            return NextResponse.json(
                { error: "Tous les champs sont obligatoires." },
                { status: 400 }
            );
        }

        return NextResponse.json(
            {
                success: true,
                message: "Message reçu",
            },
            { status: 201 }
        );
    } catch {
        return NextResponse.json(
            { error: "Requête invalide." },
            { status: 400 }
        );
    }
}