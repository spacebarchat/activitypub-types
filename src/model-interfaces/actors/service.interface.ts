import { APObject } from "../common/object.interface";
import { APActor } from "./actor.interface";

export type APService = APActor & { type: "Service" };

export const ObjectIsService = (actor: APObject): actor is APService => {
	return actor.type == "Service";
};
