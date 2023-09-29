import { APActor } from "./actor.interface";

export type APGroup = APActor & { type: "Group" };

export const ActorIsGroup = (actor: APActor): actor is APGroup => {
	return actor.type == "Group";
};
