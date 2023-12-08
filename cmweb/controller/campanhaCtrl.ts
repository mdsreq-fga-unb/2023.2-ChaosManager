'use server'

import { supabase } from "@/database/database";
import { Campanha } from "@/models/campanha";

export async function criarCampanha(formData: FormData) {
    const campanha = new Campanha(formData.get('nome'), formData.get('historia'), formData.get('senha_mestre'));
    
    const { data, error } = await supabase.from('campanhas').insert(
        {
            nome: campanha.nome,
            historia: campanha.historia,
            senha_mestre: campanha.senha_mestre,
            senha_jogador: campanha.senha_jogador,
            fichas: {
                
            },
            fichas_npc: {

            }
        }
    )
    return true
}


export async function acessarCampanha(formData: FormData) {
    let { data: campanhas, error } = await supabase
        .from('campanhas')
        .select('nome,senha_mestre,senha_jogador')
        .eq('nome', formData.get('nome'))
    if (error) {
        console.error('Erro ao buscar campanhas:', error.message);
    } else if (campanhas && campanhas.length > 0) {
        if (formData.get('senha') == campanhas[0].senha_mestre){
            console.log("mestre")
        } else if (formData.get('senha') == campanhas[0].senha_jogador){
            console.log("jogador")
        } else {
            console.log("ninguem")
        }
    } else {
        console.log('Nenhuma campanha encontrada');
    }
 }