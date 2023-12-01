
import NextAuth, { AuthOptions } from "next-auth"
import Facebook from "next-auth/providers/facebook"
import { PrismaAdapter } from "@auth/prisma-adapter"
import prisma from "../prisma";
import Credentials from "next-auth/providers/credentials";
import {compareSync} from "bcrypt";


export const authOptions :AuthOptions = { 
	debug:process.env.NODE_ENV !== "production",
	session:{
		strategy:"jwt"
	},
	adapter: PrismaAdapter(prisma),
	pages: {
		signIn: "/login",
	},
	callbacks:{
	},
	providers: [ 
		Facebook({
			clientId: process.env.FACEBOOK_CLIENT_ID!,
			clientSecret: process.env.FACEBOOK_CLIENT_SECRET!
		}) ,
		Credentials({
			credentials:{
				email:{
					label:"Email",
					type:"email",
					placeholder:"Email"
				},
				password:{
					label:"Password",
					type:"password",
					placeholder:"Senha"
				}
			},
			authorize: async (credentials) => {
				if(!credentials?.email || !credentials?.password) return null;
				const user = await prisma.user.findUnique({
					where:{
						email:credentials.email,
						password:{
							every:{
								active:true,
							}
						}
					},
					include:{
						password:true
					}
				})
				if(!user || user.password.length ==0) return null;
				if(!compareSync(credentials.password, user.password[0].hash)) return null;
				return user
			}

		})
	]
} 
export const { auth, handlers } = NextAuth(authOptions)
export const handler = NextAuth(authOptions)