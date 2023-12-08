import { NextRequest, NextResponse } from "next/server";

export async function GET(context: any, new_param: any) {
    const {params} = context

    console.log("params:", params);
    console.log("new_param: ", new_param);

    return NextResponse.json({
        hello: "GET"
    })
}

export async function POST(req: NextRequest) {
    const data = await req.json()

    return NextResponse.json({
        data
    })
}