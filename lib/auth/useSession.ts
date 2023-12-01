import { getServerSession } from "next-auth";
import { authOptions } from ".";
export default async function useServerSession(){

	const session = await getServerSession(authOptions);
    
	if(!session || !session.user) return null;
	return {...session}

}