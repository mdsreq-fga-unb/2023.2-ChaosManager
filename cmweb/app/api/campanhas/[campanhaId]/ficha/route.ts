import client_db from "@/database/db";
import { Condition, ObjectId } from "mongodb";

export async function GET() {
  const db = (await client_db).db(process.env.DB_NAME);
  const campanhaCollection = db.collection("campanha");
  try {
    const fichasList: object[] = await campanhaCollection.find().toArray();
    return new Response(JSON.stringify({ result: "Campanha", body: fichasList }));
  } catch (err: any) {
    return new Response(err.toString());
  }
}

export async function POST(req: Request, params: any) {
  console.log("params", params);
  const { campanhaId } = params.params;
  console.log("campanhaId", campanhaId);
  if (req.method !== "POST") {
    return new Response(JSON.stringify({ message: "Method not allowed" }), {
      status: 500,
    });
  }
  const body = await req.json();
  try {
    const db = (await client_db).db(process.env.DB_NAME);
    const campanhaCollection = db.collection("campanha");
    const campanha = await campanhaCollection.findOne({
      _id: Number(campanhaId) as unknown as Condition<ObjectId>,
    });
    if (!campanha) {
      return new Response(
        JSON.stringify({ message: "Campanha não encontrada", campanhaId: campanhaId }),
        {
          status: 404,
        }
      );
    }
    const campanhaFichas = campanha.fichas;
    const newObjectId = new ObjectId();
    const ficha = {
      _id: newObjectId,
      ...body.body,
    };
    const novaListaDeFichas = [...campanhaFichas, ficha];

    const response = await campanhaCollection.updateOne(
      { _id: Number(campanhaId) as unknown as Condition<ObjectId> },
      { $set: { fichas: novaListaDeFichas } }
    );
    return new Response(JSON.stringify({ result: "Ficha Criada", body: ficha }));
  } catch (err: any) {
    return new Response(err.toString());
  }
}
