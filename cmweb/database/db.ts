import sqlite3 from 'sqlite3'

import { Campanha } from "@/models/campanha";
import { Ficha } from "@/models/ficha";
import { Classes } from "@/models/item-magia";
import { Estados  } from "@/models/estado";
import { ArmasExistentes } from "@/models/arma";
import { EquipamentosExistentes } from "@/models/equipamento";
import { Testes } from "@/models/teste";
import { TracosPositivos } from "@/models/traco-positivo";
import { TracosNegativos } from "@/models/traco-negativo";

export class db {
    database: any;
    constructor(){
        const DBSOURCE = './database/cmdb.db'
        this.database = new sqlite3.Database(DBSOURCE, (err) => {
        if (err) {
            console.error(err.message)
            throw err
        } else {
            console.log('Base de dados conectada com sucesso.')
        }
        })
    }
    
    createCampanha(campanha: Campanha){
        const SQL: string = `INSERT INTO campanhas (nome, historia, senha_mestre, senha_jogador) VALUES (?, ?, ?, ?)`
        this.database.run(SQL, [campanha.nome, campanha.historia, campanha.senha_mestre, campanha.senha_jogador], (err: any) => {
            if (err) {
                console.error(err.message)
            } else {
                console.log('Campanha inserida com sucesso.')
            }
        })
    }

}
