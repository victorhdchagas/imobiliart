import {z} from "zod";


export const mountFileSchema =(MAX_FILE_SIZE:number, ACCEPTED_IMAGE_TYPES:string[])=> z.any()
	.refine((files) => files?.length == 1, "Image is required.")
	.refine((files) => files?.[0]?.size <= MAX_FILE_SIZE, "Max file size is 5MB.")
	.refine(
		(files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
		`.${ACCEPTED_IMAGE_TYPES.map(t=>t.split("/")[1]).join(", ")} files are accepted.`
	)
// .refine(async files =>{
	// 	const image = files?.[0];
	// 	const buffer = await image?.arrayBuffer();
	// 	const blob = new Blob([buffer as BlobPart], { type: image?.type });
	// 	const url = URL.createObjectURL(blob);
	// 	const img = new Image();
	// 	img.src = url;
	// 	return new Promise((resolve, reject) => {
	// 		img.onload = () => {
	// 			URL.revokeObjectURL(url);
	// 			resolve(true);
	// 		};
	// 		img.onerror = () => {
	// 			URL.revokeObjectURL(url);
	// 			reject(false);
	// 		};
	// 	})
	// })

