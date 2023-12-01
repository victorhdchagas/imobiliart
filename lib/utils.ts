import ms from "ms"

export const timeAgo = (timestamp: Date, timeOnly?: boolean): string => {
	if (!timestamp) return "never"
	return `${ms(Date.now() - new Date(timestamp).getTime())}${
		timeOnly ? "" : " ago"
	}`
}

export default class Utils{
	static async getCep(cep:string){
        
		const response = await fetch("https://brasilapi.com.br/api/cep/v2/"+cep,{
			method:"GET",
			headers:{
				"Content-Type":"application/json"
			}
		})
		const json = await response.json();
		const response2 = await fetch(json.message.substring(json.message.indexOf("https"),json.message.indexOf("reason")-1),{
			method:"GET",
			headers:{
				"Content-Type":"application/json"
			}})
		return await response2.json();
	}
	static toCamelCase(str:string){
		return str.replace(/([-_][a-z])/ig, ($1) => {
			return $1.toUpperCase()
				.replace("-", "")
				.replace("_", "");
		});
	}

	static removeDotsAndHiphen(str:string){
		return str.replace(/[-.]/g,"");
	}

	static convertDateStringToBRPattern(str:string){
		return str.replace(/(\d{2})\/(\d{2})\/(\d{4})/g, "$3-$2-$1");
	}

	static onlyDigitsFromString(str:string){
		return str.replace(/\D/g, "");
	}

	static async sleep(ms: number) {
		return await new Promise((resolve)=>{
			setTimeout(resolve,ms);
		});
	}

	static getColors(count?:number){
		return [
			"rgba(54, 162, 235, 0.2)",
			"rgba(255, 99, 132, 0.2)",
		].concat(count&& count>0?Array.from({length:count}).map(()=>this.generateRandomColors()):[])
	}
	static generateRandomColors(){
		return `rgba(${[
			Math.floor(Math.random() * 255),
			Math.floor(Math.random() * 255),
			Math.floor(Math.random() * 255),
		].join(",")}, 0.2)`
	}
	static customParseFloat(str:string){
		return parseFloat(str.replace(/\./,"").replace(",",".")||"0");
	}
	static getHash(toHash:string= "") {
		let hash = 0,
			i, chr;
		if (toHash.length === 0) return hash;
		for (i = 0; i < toHash.length; i++) {
			chr = toHash.charCodeAt(i);
			hash = ((hash << 5) - hash) + chr;
			hash |= 0; 
		}
		return hash;
	}
}