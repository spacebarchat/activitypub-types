import { APActor } from "./actor.interface";

export type APOrganization = APActor & { type: "Organization" };

export const ActorIsOrganization = (
	actor: APActor,
): actor is APOrganization => {
	return actor.type == "Organization";
};
