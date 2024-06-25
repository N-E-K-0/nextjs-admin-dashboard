import prisma from '@/lib/prisma'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import NextAuth, { AuthOptions } from 'next-auth'
import Github from 'next-auth/providers/github'

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers:[
    Github({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!
    }),
  ],
  debug: process.env.NODE_ENV === 'development',
  // secret: 'process.env.NEXTAUTH_SECRET',
  secret: 'e2f178b66cfbb957edfaa629cd2ed06c508f98f0c9d48f0d25b91445b885e97a',
  callbacks:{
    async signIn(){
      return true
    },
    async redirect(){
      return '/'
    },
  },
}

export default NextAuth(authOptions)