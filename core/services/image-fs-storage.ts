import ImageHandlerInterface from "./image-handler-interface";

export default class ImageFileSystemStorage implements ImageHandlerInterface {
	uploadImage(file: Buffer): Promise<string> {
		throw new Error("Method not implemented.");
	}
}