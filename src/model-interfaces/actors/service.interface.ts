import { APActor } from "./actor.interface";

export type APService = APActor & { type: "Service" };

export const ActorIsService = (actor: APActor): actor is APService => {
	return actor.type == "Service";
};
