import { APObject } from "../common/object.interface";

export type APVideo = APObject & { type: "Video" };

export const ObjectIsVideo = (object: APObject): object is APVideo => {
	return object.type == "Video";
};
