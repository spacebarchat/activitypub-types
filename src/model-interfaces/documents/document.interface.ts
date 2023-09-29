import { APObject } from "../common/object.interface";

export type APDocument = APObject & { type: "Document" };

export const ObjectIsDocument = (object: APObject): object is APDocument => {
	return object.type == "Document";
};
