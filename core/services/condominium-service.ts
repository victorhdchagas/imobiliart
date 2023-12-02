import {type Prisma, type  PrismaClient } from "@prisma/client";
import { DefaultPagination } from "@/app/@types";

export default class CondominiumService{
	constructor(
        private readonly prisma: PrismaClient
	){}

	searchByQueryString(query:string,pagination:DefaultPagination){
		return  this.prisma.condominium.findMany({
			where:query.length > 0?{
				OR:[
					{name:{contains:query,mode:"insensitive"}},
					{createdBy:{name:{contains:query,mode:"insensitive"}}},
					{createdBy:{email:{contains:query,mode:"insensitive"}}},
					{address:{street:{contains:query,mode:"insensitive"}}},
					{address:{complement:{contains:query,mode:"insensitive"}}},
					{address:{number:{contains:query,mode:"insensitive"}}},
				]
                
			}:undefined,
			orderBy:{
				name:"asc"
			},
			take:pagination.size,
			skip:pagination.offset
		})
        
	}

	get(where:Prisma.CondominiumWhereInput){
		if(Object.keys(where).length == 0) throw new Error("not implemented")
		return this.prisma.condominium.findFirst({
			where
		})
	}
	getUnique(where:Prisma.CondominiumWhereUniqueInput){
		if(Object.keys(where).length == 0) throw new Error("not implemented")
		return this.prisma.condominium.findFirst({
			where
		})
	}

}