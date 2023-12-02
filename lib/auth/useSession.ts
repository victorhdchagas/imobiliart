import { User, getServerSession } from "next-auth";
import { authOptions } from ".";
export default async function useServerSession():Promise<{expires:string,user:Omit<User,"id">}>{

	const session = await getServerSession(authOptions);
    
	if(session && session.user?.email &&session.user.email.length>0)
		return {expires:session.expires,user:session.user}
	throw new Error("Sessão necessária");

}