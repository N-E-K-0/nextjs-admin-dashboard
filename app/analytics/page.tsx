import Analytics from "@/components/Analytics";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function AnalyticsPage(){
  const sessions = await getServerSession(authOptions)

  if(!sessions){
    redirect('/api/auth/signin')
  }

  return <Analytics />
}