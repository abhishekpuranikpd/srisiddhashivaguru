import { db } from "../../../../lib/db";
import { NextResponse } from "next/server";
import { news } from "@prisma/client";

export async function  GET(request){
    let data 
        try {
           
         data = await db.news.findMany();
        } catch (error) {
            data = {success:false}
        }
        console.log(data);
        return NextResponse.json({data,success:true})
    }

    export async function POST(request){
    
        const {name,nlink} = await request.json();
    
        console.log(name,"Name");
        
    
        const post = await db.news.create({ data: {name,nlink}})
        return NextResponse.json({result: "Success!!",success:true ,post},{status:200})
    }