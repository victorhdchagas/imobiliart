import {z} from "zod";
import { CondominioEnderecoSchema, CondominioEnderecoWithIdSchema } from "./condominio-endereco-schema";



export const condominioSchema = z.object({
	nome:z.string(),
	userId:z.string(),
	imagem:z.optional(z.string()),
	endereco:z.optional(CondominioEnderecoSchema),
})
export const condominioWithIdSchema = condominioSchema.extend({
	id:z.string(),
	address:z.optional(CondominioEnderecoWithIdSchema),
})