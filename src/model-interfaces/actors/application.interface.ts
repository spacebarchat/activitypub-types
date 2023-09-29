import { APObject } from "../common/object.interface";
import { APActor } from "./actor.interface";

export type APApplication = APActor & { type: "Application" };

export const ObjectIsApplication = (
	actor: APObject,
): actor is APApplication => {
	return actor.type == "Application";
};
