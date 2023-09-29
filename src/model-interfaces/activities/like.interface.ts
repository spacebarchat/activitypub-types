import { APActivity } from "./activity.interface";

export type APLike = APActivity & { type: "Like" };

export const ActivityIsLike = (activity: APActivity): activity is APLike => {
	return activity.type == "Like";
};
