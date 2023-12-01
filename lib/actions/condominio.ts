"use server"

import { writeFileSync } from "fs";
import Utils from "../utils";
import prisma from "../prisma";
import useServerSession from "../auth/useSession";

export async function updateCondominio(_:BaseUploadState, data:FormData) {
	if(data.get("nome")==""){
		return {errors:{nome:["Nome obrigatorio"]}}
	}
	console.log(data.get("image"),(data.get("image") as File)?.size)
	if(data.get("image")==null || (data.get("image") as File)?.size==0){
		return {errors:{image:["imagem obrigatorio"]}}
	}
	const session =await useServerSession();
	if(!session) return {errors:{nome:["Sessão necessária"]}}
	if(!session.user) return {errors:{nome:["Sessão necessária"]}}
	const file = data.get("image") as File;
	const filepath = `/condominio/${new Date().getTime()}${file.name}`
	writeFileSync(`./public${filepath}`, Buffer.from(await file.arrayBuffer()));
	await prisma.condominium.create({
		data:{
			name:data.get("nome") as string,
			image:filepath,
			createdBy:{
				connect:{
					email:session.user.email!
				}
			}

		}
	})
	return {message:"Criado com sucesso!"};
}
export async function createCondominioAddress(_:AddressCreateType, data:FormData) {
	console.log(data);
	if(data.get("logradouro")==""){
		return {errors:{logradouro:["Campo obrigatorio"]}}
	}
	return {message:"Criado com sucesso!"};
}

export async function listCondominiums(){
	return await prisma.condominium.findMany({
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