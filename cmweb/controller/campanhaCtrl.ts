'use server'

import { supabase } from "@/database/database";
import { Campanha } from "@/models/campanha";



export async function criarCampanha(formData: FormData) {
    const campanha = new Campanha(formData.get('nome'), formData.get('historia'), formData.get('senha_mestre'));
    const { data, error } = await supabase.from('campanhas').insert(
        {
            campanha: {
                nome: campanha.nome,
                historia: campanha.historia,
                senha_mestre: campanha.senha_mestre,
                senha_jogador: campanha.senha_jogador,
                fichas: {
                    nome: "james"
                },
                fichas_npc: {
                    nome: "tiago"
                }
            }
        }
    )
}

export async function acessarCampanha(formData: FormData) {
    // ...
}