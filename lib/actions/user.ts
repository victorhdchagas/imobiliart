import prisma from "../prisma";

export  function getUser(userId:string){
	return prisma.user.findUnique({
		where:{
			id:userId
		}
	})
}
export  function getUserByEmail(email:string){
	return prisma.user.findFirst({
		where:{
			email:{
				equals:email
			}
		}
	})
}