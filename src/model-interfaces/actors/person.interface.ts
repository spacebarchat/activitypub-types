import { APActor } from "./actor.interface";

export type APPerson = APActor & { type: "Person" };

export const ActorIsPerson = (actor: APActor): actor is APPerson => {
	return actor.type == "Person";
};
