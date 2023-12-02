import {z} from "zod";

export const CondominioEnderecoSchema = z.object({
	street:z.string(),
	number:z.string(),
	complement:z.string(),
	district:z.string(),
	city:z.string(),
	state:z.string(),
	zip:z.string(),
	condominiumId:z.string(),
	lat:z.string(),
	lon:z.string()
});

export const CondominioEnderecoWithIdSchema = CondominioEnderecoSchema.extend({
	id:z.coerce.number()
})