import client_db from "@/database/db";
import { Condition, ObjectId } from "mongodb";

export async function GET(req: Request, params: any) {
  const { campanhaId, fichaId } = params.params;
  console.log("params", params);
  console.log("campanhaId", campanhaId);
  const db = (await client_db).db(process.env.DB_NAME);
  const campanhaCollection = db.collection("campanha");
  try {
    const campanha = await campanhaCollection.findOne({
      _id: Number(campanhaId) as unknown as Condition<ObjectId>,
    });
    if (!campanha) {
      return new Response(JSON.stringify({ message: "Campanha não encontrada" }), {
        status: 404,
      });
    }
    const fichas = campanha.fichas;
    const ficha = fichas.find((ficha: any) => ficha._id == fichaId);
    if (!ficha) {
      return new Response(JSON.stringify({ message: "Ficha não encontrada" }), {
        status: 404,
      });
    }
    return new Response(JSON.stringify({ result: "Ficha encontrada!", ficha }));
  } catch (err: any) {
    return new Response(err.toString());
  }
}
