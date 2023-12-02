export default class CondominioEnderecoDTO {
	private constructor(
		public readonly cidade:string,
		public readonly estado:string,
		public readonly bairro:string,
		public readonly logradouro:string,
		public readonly numero:string,
		public readonly complemento:string,
		public readonly cep:string,
		public readonly id:string,
		public readonly condominioId:string,
		public readonly latitude?:string,
		public readonly longitude?:string,

	){}
    
	static get instance(){
		return ( cidade:string,
			estado:string,
			bairro:string,
			logradouro:string,
			numero:string,
			complemento:string,
			cep:string,
			id:string,
			condominiumId:string,
			latitude?:string,
			longitude?:string)=>
		{
			return  new CondominioEnderecoDTO(cidade,estado,bairro,logradouro,numero,complemento,cep,id,condominiumId,latitude,longitude);
		}
	}
}
