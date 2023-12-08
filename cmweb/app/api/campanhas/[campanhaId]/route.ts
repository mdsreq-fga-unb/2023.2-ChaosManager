import connection from "@/database/database";
import { NextResponse } from "next/server";

export async function GET(context: any){
  const db = await connection();
  const { params } = context;
  console.log(params);

  const data = await consultarDados(db, parseInt(params.campanhaId));
  return NextResponse.json({
    "status":"success",
    data
  })
}

async function consultarDados(db: any, _id: number) {
  const result = await db.collection('campanha').find({ _id: _id }).toArray();
  return result;
}
