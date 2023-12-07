import client_db from "@/database/db";
import { Condition, ObjectId } from "mongodb";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest, { params }: { params: { campanhaId: string } }) {
  const { campanhaId } = params;
  const db = (await client_db).db(process.env.DB_NAME);
  const campanhaCollection = db.collection("campanha");
  try {
    const campanha = await campanhaCollection.findOne({
      _id: Number(campanhaId) as unknown as Condition<ObjectId>,
    });
    return new Response(JSON.stringify({ result: "Campanha", body: campanha }));
  } catch (err: any) {
    return new Response(err.toString());
  }
}

export async function PUT(req: NextRequest, { params }: { params: { campanhaId: string } }) {
  const { campanhaId } = params;
  const body = await req.json();

  try {
    const db = (await client_db).db(process.env.DB_NAME);
    const campanhaCollection = db.collection("campanha");
    const campanha = await campanhaCollection.findOneAndUpdate(
      {
        _id: Number(campanhaId) as unknown as Condition<ObjectId>,
      },
      { body }
    );
    return new Response(JSON.stringify({ result: "Campanha", body: campanha }));
  } catch (err: any) {
    return new Response(err.toString());
  }
}
