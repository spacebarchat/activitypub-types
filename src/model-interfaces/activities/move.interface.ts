import { APActivity } from "./activity.interface";

export type APMove = APActivity & { type: "Move" };

export const ActivityIsMove = (activity: APActivity): activity is APMove => {
	return activity.type == "Move";
};
