import { APActor } from "./actor.interface";

export type APApplication = APActor & { type: "Application" };

export const ActorIsApplication = (actor: APActor): actor is APApplication => {
	return actor.type == "Application";
};
