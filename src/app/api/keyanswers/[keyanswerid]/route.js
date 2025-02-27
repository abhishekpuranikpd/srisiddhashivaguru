import { getCurrentUser } from '../../../../../lib/session';
import { db } from '../../../../../lib/db';
import { NextResponse } from 'next/server';
import { Post } from '@prisma/client';

export async function PUT(request,{params}) {
  const id = params.keyanswerid
  try {
    // const {title, pdflink, category } = await request.json();
    const data = await request.formData();

    const title = await data.get("title");
    const pdflink = await data.get("pdflink");
    const category = await data.get("category");
  
    
  
  
    const user = await getCurrentUser();

    if (!user) {
      return NextResponse.json({ error: 'User not authenticated' }, { status: 401 });
    }

    const existingPost = await db.keya.findFirst({
      where: {
        id,
        UserId: user.id,
      },
    });

    if (!existingPost) {
      return NextResponse.json({ error: 'Post not found or unauthorized' }, { status: 404 });
    }

    const updatedPost = await db.keya.update({
      where: { id },
      data: { title, pdflink, category},
    });

    return NextResponse.json({ result: 'Post updated successfully', success: true, updatedPost }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: 'An error occurred while updating the post' }, { status: 500 });
  }
}

export async function  GET(request){
  let data 
      try {
         
       data = await db.keya.findUnique({where : {id:keyanswerid}});
      } catch (error) {
          data = {success:false}
      }
      console.log(data);
      return NextResponse.json({data,success:true})
  }

  export async function DELETE(request,{params}) {
    const id = params.keyanswerid
    try {
      
      const user = await getCurrentUser();
  
      if (!user) {
        return NextResponse.json({ error: 'User not authenticated' }, { status: 401 });
      }
  
      // const existingPost = await db.Post.findFirst({
      //   where: {
      //     id,
      //     UserId: user.id,
      //   },
      // });
  
      // if (!existingPost) {
      //   return NextResponse.json({ error: 'Post not found or unauthorized' }, { status: 404 });
      // }
  
      const deletePost = await db.keya.delete({
        where: { id },
       
      });
  
      return NextResponse.json({ result: 'updated successfully', success: true, deletePost }, { status: 200 });
    } catch (error) {
      console.log(error);
      return NextResponse.json({ error: 'An error occurred while deleting the post' }, { status: 500 });
    }
  }
  