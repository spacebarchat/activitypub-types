import { APObject } from "./object.interface";

export type APNote = APObject & { type: "Note" };

export const ObjectIsNote = (object: APObject): object is APNote => {
	return object.type == "Note";
};
