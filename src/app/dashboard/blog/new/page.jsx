import React from 'react'
import { getCurrentUser } from '../../../../../lib/session'
import BlogForm from '@/components/postForm'

const BlogPage = async () => {
    const user = await getCurrentUser()

    if (!user) {
        redirect("/auth/login")
    }

  return (
    <div className="bg-gray-700 min-h-screen">
    <BlogForm/></div>
  )
}

export default BlogPage