import { APObject } from "../common/object.interface";
import { APActor } from "./actor.interface";

export type APOrganization = APActor & { type: "Organization" };

export const ObjectIsOrganization = (
	actor: APObject,
): actor is APOrganization => {
	return actor.type == "Organization";
};
