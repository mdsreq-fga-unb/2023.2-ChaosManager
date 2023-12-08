import connection from "@/database/database";
import { NextResponse } from "next/server";

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
    console.error("Erro ao consultar dados:", error);
    return NextResponse.json({
      status: "error",
      message: "Erro ao consultar dados",
    });
  }
}

async function consultarDados(db: any, searchParams: any) {
  let status = "error";
  let message = "";
  let result: [] = [];
  try{
    result = await db.collection('campanha').find(searchParams).toArray();
    if (result.length == 0){
      message = `Campanha não encontrada`;
    }
    else{
      status = "success";
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
    const {status, message} = await enviarDados(db, data);

    return NextResponse.json({
      status: status,
      message: message,
      data,
    });
  } catch (error) {
    console.error("Erro ao enviar dados:", error);
    return NextResponse.json({
      status: "error",
      message: "Erro ao enviar os dados",
    });
  }
}

async function enviarDados(db: any, req: Request) {
  let message = "";
  let status = "error";

  try{
    const response = await db.collection('campanha').insertOne(req);
    if ('insertedId' in response){
      const { insertedId } = response;
      status = "success";
      message = `ID '${insertedId}' cadastrado com sucesso`;
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

  return {"status": status, "message": message};
}

// ------------ PUT ------------

export async function PUT(req: Request) {
  try {
    const data = await req.json();
    const db = await connection();
    const {status, message} = await atualizarDados(db, data);

    return NextResponse.json({
      status: status,
      message: message,
      data,
    });
  } catch (error) {
    return NextResponse.json({
      status: "error",
      message: "Erro ao enviar os dados",
    });
  }
}

async function atualizarDados(db: any, req: any) {
  let message = "";
  let status = "error";

  try{
    const { _id } = req; 
    const response = await db.collection('campanha').updateOne({ _id: _id}, { $set: req });
    if ('matchedCount' in response){
      const { matchedCount } = response;
      
      if (matchedCount == 0){
        message = `ID '${_id}' não encontrado`;
      }
      else{
        message = `ID '${_id}' atualizado com sucesso`;
        status = "success";
      }
    }
    else{
      message = response;
    }
  }
  catch (error: any){
    message = "Erro desconhecido";
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
      status: "error",
      message: "Erro ao excluir dados",
    });
  }
}

async function deletarDados(db: any, req: Request) {
  let message = "";
  let status = "error";

  if ('_id' in req){
    const { _id } = req;
    try{
      const response = await db.collection('campanha').deleteOne({ _id });

      if ('deletedCount' in response){
        const { deletedCount } = response;

        if (deletedCount == 0)
          message = `ID '${_id}' não encontrado`;
        else{
          status = "success";
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
