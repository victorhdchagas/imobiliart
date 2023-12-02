import {type PrismaClient, type  Prisma } from "@prisma/client";
import CondominiumAddressModel from "../models/condominium/condominium-address-model";

export default class CondominiumAddressService{
	constructor(
        readonly prisma: PrismaClient
	){}
	async create(data:CondominiumAddressModel) {
		const createdAddress =await this.prisma.address.create({
			data:data
		});
		return createdAddress.id;
	}
	get(where:Prisma.AddressWhereInput){
		if(Object.keys(where).length == 0) throw new Error("not implemented")
		return this.prisma.address.findFirst({
			where
		})
	}

	getUnique(where:Prisma.AddressWhereUniqueInput){
		if(Object.keys(where).length == 0) throw new Error("not implemented")
		return this.prisma.address.findUnique({
			where
		})
	}

	async update(data:CondominiumAddressModel):Promise<boolean> {
		if(Object.keys(data).length == 0) throw new Error("not implemented")
		const updatedAddress =await this.prisma.address.update({
			where:{
				id:data.id
			},
			data
		})
		return !!updatedAddress;
	}

}