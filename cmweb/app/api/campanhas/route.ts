import connection from "@/database/database";
import { NextResponse } from "next/server";
const { ObjectId } = require('mongodb');

// ------------ GET ------------

export async function GET(req: Request) {
  const searchParams = new URL(req.url).searchParams;
  const queryParams: any = {};  

  searchParams.forEach((value, key) => {
    queryParams[key] = value;
  });

  if (searchParams.has('_id')) {
    const _id = parseInt(searchParams.get('_id')!);
    if (!isNaN(_id)) {
      queryParams._id = _id;
    }
  }

  const db = await connection();

  try {
    const {status, message, result} = await consultarDados(db, queryParams);
    return NextResponse.json({
      status: status,
      message: message,
      result,
    });
  } catch (error) {
    return NextResponse.json({
      status: 500,
      message: "Erro ao consultar dados",
    });
  }
}

async function consultarDados(db: any, searchParams: any) {
  let status = 500;
  let message = "";
  let result: [] = [];
  try {
    result = await db.collection('campanha').find(searchParams).toArray();
    if (result.length == 0){
      message = `Campanha não encontrada`;
    }
    else{
      status = 200;
      message = "Campanha encontrada com sucesso";
    }
  }
  catch{
    message = "Erro desconhecido";
  }

  return {status, message, result};
}

// ------------ POST ------------

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const db = await connection();

    const { nome } = data;
    const searchParams = { nome: nome };
    const {status} = await consultarDados(db, searchParams);

    if (status == 200){
      return NextResponse.json({
        status: 500,
        message: "Nome ja cadastrado",
        data,
      });
    }
    else{
      if ('_id' in data) {
        delete data._id;
      }      

      const {status, message, newId} = await enviarDados(db, data);

      return NextResponse.json({
        status: status,
        message: message,
        newId,
        data,
      });
    }
  } catch (error) {
    return NextResponse.json({
      status: 500,
      message: "Erro ao enviar os dados",
    });
  }
}

async function enviarDados(db: any, req: Request) {
  let message = "";
  let status = 500;
  let newId = -1;

  try{
    const response = await db.collection('campanha').insertOne(req);
    if ('insertedId' in response){
      const { insertedId } = response;
      status = 200;
      message = `ID '${insertedId}' cadastrado com sucesso`;
      newId = insertedId;
    }
  }
  catch(error: any){
    if (error.code === 11000 && error.keyPattern && error.keyValue){
      message = `O ID '${error.keyValue._id}' já está cadastrado`;
    }
    else{
      message = `Erro desconhecido`;
    }
  }

  return {"status": status, "message": message, newId};
}

// ------------ PUT ------------

export async function PUT(req: Request) {
  try {
    const data = await req.json();
    const db = await connection();
    console.log(data);
    const {status, message} = await atualizarDados(db, data);

    return NextResponse.json({
      status: status,
      message: message,
      data,
    });
  } catch (error) {
    return NextResponse.json({
      status: 500,
      message: "Erro ao enviar os dados",
    });
  }
}

async function atualizarDados(db: any, req: any) {
  let message = "";
  let status = 500;

  try{
    let { _id } = req;
    const objectId = new ObjectId(_id);

    if ('_id' in req) {
      delete req._id;
    }

    const response = await db.collection('campanha').updateOne({ _id: objectId}, { $set: req });
    if ('matchedCount' in response){
      const { matchedCount } = response;
      
      if (matchedCount == 0){
        message = `ID '${_id}' não encontrado`;
      }
      else{
        message = `ID '${_id}' atualizado com sucesso`;
        status = 200;
      }
    }
    else{
      message = response;
    }
  }
  catch (error: any){
    message = "Erro desconhecido";
    console.log(error);
  }
  return {"status": status, "message": message};
}

// ------------ DELETE ------------

export async function DELETE(req: Request) {
  try {
    const data = await req.json();
    const db = await connection();
    const {status, message} = await deletarDados(db, data);

    return NextResponse.json({
      status: status,
      message: message,
      data
    });
  } catch (error) {
    return NextResponse.json({
      status: 500,
      message: "Erro ao excluir dados",
    });
  }
}

async function deletarDados(db: any, req: Request) {
  let message = "";
  let status = 500;

  if ('_id' in req){
    const { _id } = req;
    try{
      const response = await db.collection('campanha').deleteOne({ _id });

      if ('deletedCount' in response){
        const { deletedCount } = response;

        if (deletedCount == 0)
          message = `ID '${_id}' não encontrado`;
        else{
          status = 200;
          message = `ID '${_id}' apagado com sucesso!`;
        }
      }
    }
    catch (error){
      message = "Erro desconhecido";
    }
  }else{
    message = "Requisição sem a propriedade '_id'";
  }

  return {"status": status, "message":message}
}
