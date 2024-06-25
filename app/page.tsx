import Search from "@/components/Search";
import UsersTable from "@/components/UsersTable";
import { Card, Text, Title } from "@tremor/react";
import prisma from '@/lib/prisma'

type Props = {
  searchParams:{
    q?: string
  }
}

export default async function Home({searchParams}: Props) {
  const query = searchParams?.q
  const users = await prisma.user.findMany({
    where:{
      name:{
        contains: query,
        mode: 'insensitive',
      },
      email:{
        contains: query,
        mode: 'insensitive',
      },
    },
  })

  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      <Title>Users</Title>
      <Text>A table of users retrieved from our database</Text>
      <Search query={query}/>
      <Card className="mt-6">
        <UsersTable users={users}/>
      </Card>
    </main>
  );
}
