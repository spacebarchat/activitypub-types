import { APLink } from "./link.interface";
import { APObject } from "./object.interface";

export type APMention = APLink & { type: "Mention" };

export const ObjectIsMention = (object: APObject): object is APMention => {
	return object.type == "Mention";
};
