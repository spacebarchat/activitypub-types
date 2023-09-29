import { APObject } from "../common/object.interface";

export type APAudio = APObject & { type: "Audio" };

export const ObjectIsAudio = (object: APObject): object is APAudio => {
	return object.type == "Audio";
};
