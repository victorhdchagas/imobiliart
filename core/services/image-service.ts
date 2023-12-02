import ImageHandlerInterface from "./image-handler-interface";

export default class ImageService{
	/**
     *
     */
	constructor(private readonly handler:ImageHandlerInterface) {}

	uploadFile(file:Buffer){
		return this.handler.uploadImage(file)
	}
}