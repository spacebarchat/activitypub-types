import { APObject } from "../common/object.interface";

export type APImage = APObject & { type: "Image" };

export const ObjectIsImage = (object: APObject): object is APImage => {
	return object.type == "Image";
};
