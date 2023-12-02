"use server"

import { writeFileSync } from "fs";
import Utils from "../utils";
import prisma from "../prisma";
import useServerSession from "../auth/useSession";
import CondominioFacade from "@/core/facades/condominio/condominio-facade";
import { condominioSchema } from "../schemas/condominio-schema";
import { mountFileSchema } from "../schemas/file-schema";
const condominioFacade = new CondominioFacade();
export async function getAddress(condominiumId?:string){
	if(!condominiumId) return null;
	return await prisma.address.findFirst({
		where:{
			condominiumId
		}
	})
}
export async function getCondominio(id?:string){
	return await condominioFacade.getById(id)
}

export async function updateCondominio2(_:BaseUploadState, data:FormData) {
	const formJson = Object.fromEntries(data.entries());
	const validatedData = condominioSchema.safeParse(formJson);
	if(!validatedData.success){
		return {errors:validatedData.error.formErrors.fieldErrors}
	}
	const validatedImage = mountFileSchema(500_000,["image/jpeg", "image/jpg", "image/png"]).safeParse(data.get("image"));
	if(!validatedImage.success){
		console.log(validatedImage.error.formErrors.fieldErrors)
		return {errors:validatedImage.error.formErrors.fieldErrors}
	}
	const session =await useServerSession();
	const file = data.get("image") as File;
	const filepath = `/condominio/${new Date().getTime()}${file.name}`
	await setTimeout(async ()=>writeFileSync(`./public${filepath}`, Buffer.from(await file.arrayBuffer())),10);
	const id = data.get("id") as string;
	const dataToCreate ={
		data:{
			name:data.get("nome") as string,
			image:filepath,
			createdBy:{
				connect:{
					email:session.user.email!
				}
			}

		}
	}
	if(id==="")
		await prisma.condominium.create(dataToCreate)
	else
		await prisma.condominium.update({
			where:{
				id
			},
			data:{
				name:data.get("nome") as string,
				image:filepath
			}
		})
	// revalidatePath("/protected/admin/condominios","page")
	// if(id!=="")
	// 	revalidatePath(`/protected/admin/condominios/${id}`)
    
	return {message:"ok"};
}
export async function updateCondominio(_:BaseUploadState, data:FormData) {
	const formJson = Object.fromEntries(data.entries());
	const validatedCreate = condominioFacade.validateCreate(formJson)
	if(!validatedCreate.success)
		return validatedCreate.errors
    
	const validatedImage = condominioFacade.validateImage(data.get("image") as File,{});
	if(!validatedImage.success){
		return validatedImage.errors
	}
	const session =await useServerSession();
	const file = data.get("image") as File;
	const filepath = `/condominio/${new Date().getTime()}${file.name}`
	await setTimeout(async ()=>writeFileSync(`./public${filepath}`, Buffer.from(await file.arrayBuffer())),10);
	const id = data.get("id") as string;
	const dataToCreate ={
		data:{
			name:data.get("nome") as string,
			image:filepath,
			createdBy:{
				connect:{
					email:session.user.email!
				}
			}

		}
	}
	if(id==="")
		await prisma.condominium.create(dataToCreate)
	else
		await prisma.condominium.update({
			where:{
				id
			},
			data:{
				name:data.get("nome") as string,
				image:filepath
			}
		})
	// revalidatePath("/protected/admin/condominios","page")
	// if(id!=="")
	// 	revalidatePath(`/protected/admin/condominios/${id}`)
    
	return {message:"ok"};
}
export async function createCondominioAddress(_:AddressCreateType, data:FormData) {
	console.log(data);
	if(data.get("logradouro")==""){
		return {errors:{logradouro:["Campo obrigatorio"]}}
	}
	const object = Object.fromEntries(data.entries()) as any

	await prisma.address.create({
		data:{
			city:object.estado,
			state:object.estado,
			district:object.bairro,
			street:object.logradouro,
			number:object.numero,
			complement:object.complemento,
			zip:object.cep,
			condominiumId:object.id,
			lat:object.latitude,
			lon:object.longitude
		}

	})
	return {message:"Criado com sucesso!"};
}

export async function listCondominiums(query:string){
	console.log(query)
	return await prisma.condominium.findMany({
		where:query.length > 0?{
			OR:[
				{name:{contains:query,mode:"insensitive"}},
				{createdBy:{name:{contains:query,mode:"insensitive"}}},
				{createdBy:{email:{contains:query,mode:"insensitive"}}},
				{Address:{some:{street:{contains:query,mode:"insensitive"}}}},
				{Address:{some:{complement:{contains:query,mode:"insensitive"}}}},
				{Address:{some:{number:{contains:query,mode:"insensitive"}}}},
			]
                
		}:undefined,
		orderBy:{
			name:"asc"
		}
	})
}

export async function getCep(cep:string){
	return Utils.getCep(cep);
}

export type BaseUploadState = {
    errors?: {
      name?: string[];
      condominioId?: string[]
      imagem?: string[]
    };
    message?: string | null;
}

export type AddressCreateType = {
    errors?: {
        logradouro?:string[]
        complemento?:string[]
        numero?:string[]
        cep?:string[]
        bairro?:string[]
        estado?:string[]
    };
    message?: string | null;
}