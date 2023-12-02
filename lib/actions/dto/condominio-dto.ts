import CondominioEnderecoDTO from "./condominio-endereco-dto";

export class CondominioDTO {
	private constructor(
        public readonly nome:string,
        public readonly imagem?:string,
        public readonly id?:string,
        public readonly endereco?:CondominioEnderecoDTO
	){}
    
	static get instance(){
		return (nome:string,imagem?:string,id?:string)=> new CondominioDTO(nome,imagem,id)
	}
}
