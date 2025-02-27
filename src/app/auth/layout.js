import { getCurrentUser } from "../../../lib/session"
import Link from "next/link"

import { redirect } from "next/navigation"



export default async function AuthLayout({ children }) {
  const user = await getCurrentUser()

  if (user) {
    redirect("/dashboard")
  }
 
  return (
    <>
      
      
      <div className="flex items-center justify-center">{children}</div>
    </>
  )
}