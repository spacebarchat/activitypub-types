import { APActivity } from "./activity.interface";
import { APIgnore } from "./ignore.interface";

export type APBlock = APIgnore & { type: "Block" };

export const ActivityIsBlock = (activity: APActivity): activity is APBlock => {
	return activity.type == "Block";
};
