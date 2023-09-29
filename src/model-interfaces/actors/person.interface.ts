import { APObject } from "../common/object.interface";
import { APActor } from "./actor.interface";

export type APPerson = APActor & { type: "Person" };

export const ObjectIsPerson = (actor: APObject): actor is APPerson => {
	return actor.type == "Person";
};
