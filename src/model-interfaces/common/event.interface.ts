import { APObject } from "./object.interface";

export type APEvent = APObject & { type: "Event" };

export const ObjectIsEvent = (object: APObject): object is APEvent => {
	return object.type == "Event";
};
