'use server'

import { db } from "@/database/db"
import { Campanha } from "@/models/campanha";

export async function criarCampanha(formData: FormData) {
    const database = new db();
    database.createCampanha(new Campanha(formData.get('nome'), formData.get('historia'), formData.get('senha_mestre')));
}

export async function acessarCampanha(formData: FormData) {
    const database = new db();
    database.createCampanha(new Campanha(formData.get('nome'), formData.get('historia'), formData.get('senha_mestre')));
}